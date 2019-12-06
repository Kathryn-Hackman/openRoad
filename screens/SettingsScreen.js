//user interests screen irl

import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

export default function SettingsScreen() {
  
  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.interestsButton}>
        <Text>Interest 1</Text>
      </ScrollView>
      <ScrollView style={styles.interestsButton}>
        <Text>Interest 2</Text>
      </ScrollView>
      <ScrollView style={styles.interestsButton}>
        <Text>Interest 3</Text>
      </ScrollView>
      <ScrollView style={styles.interestsButton}>
        <Text>Interest 4</Text>
      </ScrollView>
      <ScrollView style={styles.interestsButton}>
        <Text>Interest 5</Text>
      </ScrollView>
      <ScrollView style={styles.interestsButton}>
        <Text>Interest 6</Text>
      </ScrollView>
    </ScrollView>
  );
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: '#000000',
},
interestsButton: {
  //paddingTop: 0.2,
  flexDirection: 'row',
  marginTop: 0.05 * height,
  marginLeft: 0.08 * width,
  height: height * 0.09,
  width: height * 0.09,
  borderRadius: height * 0.09,
  backgroundColor: 'rgb(195,125,198)',
}

})

SettingsScreen.navigationOptions = {
  title: 'I am interested in...',
};
