import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn/login';
export type AuthStackParamilist = {
    SignIn: undefined;
    SignUp: undefined;
};

const Auth = createStackNavigator<AuthStackParamilist>();

type AuthRoutesProps = Record<string, never>;

type AuthRoutesState = Record<string, never>;

export default class AuthRoutes extends Component<AuthRoutesProps, AuthRoutesState>{
    render(){
        return(
            <AuthStack.Navigator screenOptions={{headerShown: false}}/>
                <AuthStack name="SignIn" Component={SignIn}/>
            <AuthStack.Navigator>
        );
    }
}