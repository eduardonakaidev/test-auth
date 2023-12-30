import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AuthContext, useAuth } from "../context/AuthContext";


export default function Routes(){
    const {authToken} = useAuth();
    return(
        <NavigationContainer>
            {authToken ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    )
}