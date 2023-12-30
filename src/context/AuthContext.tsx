import { createContext, useContext, useEffect, useState } from "react";
import React,{ ReactNode } from "react";
import { api } from "../utils/api";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface SignInReponse {
    token: string;
}
interface AuthContextData {
    authToken?:SignInReponse;
    signIn: (email:string,password:string)=> Promise<SignInReponse>
    signOut:()=> Promise<void>
    isLoading:boolean;
}
interface ProvedorAutenticacaoProps {
    children: ReactNode;
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider:React.FC<ProvedorAutenticacaoProps> = ({children}) =>{
    const [authToken,setAuthToken] = useState<SignInReponse>();
    const [isLoading,setIsLoading] = useState(false);
    async function signIn(email:string,password:string){
        try{
        const response = await api.post('/store/auth',{email,password},
        {
            headers:{
                'Content-Type':'application/json'
            }
        });
        setAuthToken(response.data);
        
        AsyncStorage.setItem('@tokenUser',JSON.stringify(response.data));
        return response.data;
        }catch(error){
            Alert.alert(error.message,'tente novamente');
        }

    }

    function signOut():Promise<void>{
        setAuthToken(undefined);
        AsyncStorage.removeItem('@tokenUser');
        return;
    }
    useEffect(()=>{
        loadFromStorage();
    },[])
    async function loadFromStorage(){
        const auth = await AsyncStorage.getItem('@tokenUser');
        if(auth){
            setAuthToken(JSON.parse(auth) as SignInReponse);
        }
    }
    return(
        <AuthContext.Provider value={{authToken,signIn,signOut,isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}
