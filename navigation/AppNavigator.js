import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';
import TestNav from '../screens/TestNav';

export default createAppContainer(

  TestNav

  //createSwitchNavigator({

  //   Auth: AuthNavigator,
  // Main: MainTabNavigator,

  // })
);

