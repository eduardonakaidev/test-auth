import { View } from "react-native";
import { Container, ErrorText } from "./styles";
import { Input } from "../../components/Inputs";
import { useState } from "react";
import { ButtonSignIn } from "../../components/ButtonLogin";
import { useAuth } from "../../context/AuthContext";


export function SignInScreen(){
    const {signIn} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const hasError = false;
     
    return(
        <Container>
            <Input placeholder="email" keyboardType="email-address" value={email} onChangeText={setEmail}/>
            <Input placeholder="password" value={password} onChangeText={setPassword}/>
            <ButtonSignIn title="Login" onPress={()=> signIn(email,password)}/>
            <ErrorText  hasError={hasError}>
                email/senha invalida ,tente novamente.
            </ErrorText>
        </Container>
    )
}