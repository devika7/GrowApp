import React from 'react';
//import { Platform } from 'react-native';
import { createStackNavigator, createSwitchNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import ResetPassScreen from '../screens/ResetPassScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Logout from '../screens/Logout';


const AuthNavigator = createSwitchNavigator(
{
    WelcomeScreen,
    LoginScreen,
    SignupScreen,
    ResetPassScreen,
    Logout,
},

{
    initialRouteName: 'WelcomeScreen'
  }
)

//const SignupStack = createStackNavigator(
    //{
    //  Signup: SignupScreen,
   // },
  //  config
  //);
  
//SignupStack.path = '';

AuthNavigator.path = '';
  
export default AuthNavigator;