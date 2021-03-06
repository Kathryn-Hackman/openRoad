import React from 'react';
//import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PreviewScreen from '../screens/PreviewScreen';
import RouteScreen from '../screens/RouteScreen';

//port MainTabNavigator from './MainTabNavigator';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Links: {screen: LinksScreen},
  Settings: {screen: SettingsScreen},
  Preview: {screen: PreviewScreen},
  Route: {screen: RouteScreen}

})

export default createAppContainer(MainNavigator);
  //createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    //Main: MainTabNavigator,
