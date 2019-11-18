import React from 'react';
import { Button, Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TextInputBox } from '../components/TextInputBox';
import { NavigationEvents } from 'react-navigation';

export default function PreviewScreen(props){
    return (
    <ScrollView style={styles.container}>
				<Text>Your Current Journey from [start city] to [end city]:</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b0e0e6',
      paddingTop: 20,
      paddingLeft: 20,
    },
  });