import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationEvents, NavigationActions, createAppContainer } from 'react-navigation';
import { constants } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from 'react-navigation-stack';


export default function HomeScreen(props) {
    const {navigate} = props.navigation;
    return (
      <LinearGradient colors = {['#00ecff', '#1b97a1']} style ={{flex:1}}>
        <View style = {styles.container}>
        <Image source = {require('../assets/images/orlogo.png')}></Image>
        </View>
        <ActionButton>
          <ActionButton.Item buttonColor='#9b59b6' title="New Journey" onPress={() => navigate('Links')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Saved Journey 1" onPress={() => navigate('Interests')}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </LinearGradient>
    );
}

const styles = StyleSheet.create({

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    height: '80%',
  }
});