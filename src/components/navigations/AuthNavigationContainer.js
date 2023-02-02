import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../../screens/auth/HomeScreen/Home';
import Login from '../../screens/auth/Login';
import Signup from '../../screens/auth/Signup';
import ForgotPassword from '../../screens/auth/ForgotPassword';
import CustomBottomTabNavigator from './CustomBottomTabNavigator';
import PlayersScreen from '../../screens/playerPanel/PlayersScreen';
import LoginCredentials from '../../screens/auth/HomeScreen/LoginCredentials';

const Stack = createNativeStackNavigator();

export default function AuthNavigationContainer() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="LoginCredentials" component={LoginCredentials} />
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="SignupScreen" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name= "PlayerHome" component={CustomBottomTabNavigator} />
        </Stack.Navigator>
    )
}