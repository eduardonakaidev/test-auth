import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { HomeScreen } from "../screens/HomeScreen";
import { SettigsScreen } from "../screens/SettingsScreen";
import { CreateProductScreen } from "../screens/CreateProductScreen";


type AppRoutesProps ={
    home : undefined;
    createProduct: undefined;
    settings: undefined;
}

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AppRoutesProps>;
export function AppRoutes(){

    const {Navigator,Screen} = createNativeStackNavigator();
    return(
        <Navigator initialRouteName="home">
            <Screen name="home" component={HomeScreen}/>
            <Screen name="settings" component={SettigsScreen}/>
            <Screen name="createProduct" component={CreateProductScreen}/>
        </Navigator>
    )
}