import React from 'react';
import Portfolio from "./Portfolio";
import SignupScreen from "./SignupScreen";
import ResetPassScreen from "./ResetPassScreen";
import WelcomeScreen from "./WelcomeScreen";
import Logout from "./Logout";
import Themes from "./Themes";
import Profile from "./Profile";
import LoginScreen from "./LoginScreen";
//import PortfolioDetails from './PortfolioDetails';
//import PortfolioDetails1 from './PortfolioDetails1';
import Stocks from './Stocks';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


export const TestNav = createStackNavigator(
    {

        Signup: {
            screen: SignupScreen,

        },
        Login: {
            screen: WelcomeScreen,
            screen: LoginScreen,
        },

        Reset: {
            screen: ResetPassScreen,
        },

        MainTabNavigator: {
            screen: createBottomTabNavigator(
                {
                    Portfolio: {
                        screen: createStackNavigator(
                            {
                                Overview: {
                                    screen: Portfolio,

                                },
                                Details: {
                                    screen: Stocks,

                                }

                            },

                            {
                                headerMode: 'none',

                            }
                        )

                    },
                    Themes: {

                        screen: createStackNavigator(
                            {
                                Themes: {
                                    screen: Themes,
                                },

                            },
                            {
                                headerMode: 'none',
                            }
                        )
                    },

                    Profile: {
                        screen: Profile,
                        screen: Logout,
                    },
                },
                {
                    //tabBarPosition: 'bottom',
                    navigationOptions: ({ navigation }) => ({
                        // ...                         
                    }),
                    tabBarOptions: {
                        // ...
                    },
                }
            )
        }
    },
    {
        headerMode: 'none',
        // onTransitionStart: (e) => {
        //     console.log('Navigating somewhere');
        //     console.log(e);
        // },
    }
);

export default TestNav;