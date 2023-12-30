import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";

export function AuthRoutes(){
    const {Navigator,Screen} = createNativeStackNavigator();

    return(
        <Navigator initialRouteName="signIn">
            <Screen name="signIn" component={SignInScreen}/>
            <Screen name="signUp" children={SignUpScreen}/>
        </Navigator>
    )
}