import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationEvents } from 'react-navigation';
import { constants } from 'expo';

function Seperator(){
  return <View style={styles.separator} />;
}

export default function HomeScreen(props) {
  // render() {
    const {navigate} = props.navigation;
    const gradientHeight = 900;
    const gradientBackground = 'rgb(37, 151, 160)';
    const data = Array.from({ length: gradientHeight });
    return (
      <View style={{flex:1}}>
 
        <ActionButton>
          <ActionButton.Item buttonColor='#9b59b6' title="New Journey" onPress={() => navigate('Links')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  // }
}const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});