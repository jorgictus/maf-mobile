import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator();
import Preload from "../pages/Preload";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Stacks = () => {
    return (
        <Stack.Navigator 
            screenOptions={{headerShown : false}}
            initialRouteName="Preload"
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}

export default Stacks;