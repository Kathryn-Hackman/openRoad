import React from 'react';
//import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PreviewScreen from '../screens/PreviewScreen';

//port MainTabNavigator from './MainTabNavigator';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Links: {screen: LinksScreen},
  Interests: {screen: SettingsScreen},
  Preview: {screen: PreviewScreen}
})

export default createAppContainer(MainNavigator);
  //createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    //Main: MainTabNavigator,
