import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer,createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const TestNavigator = createStackNavigator({
  
  Home: {screen: HomeScreen},
  Links: {screen: LinksScreen},
  
});

export default createAppContainer(TestNavigator);
