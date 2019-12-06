//user interests screen irl
import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { InterestButton } from '../components/InterestButton';
import '@expo/vector-icons';

export default function SettingsScreen() {

  var interestList = ['Hiking','Museum','Restaurant'];
  var buttonList = [];
  for (let i = 0; i < interestList.length; i++) {
    buttonList.push(
      <InterestButton interest ={interestList[i]}></InterestButton>
    )
  }
  return (
    <ScrollView>
      <Text>What are your interests?</Text>
      {buttonList}
      <View style = {{ flexDirection: 'row'}}>
      </View>
    </ScrollView>
  );
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: 'white',
},

})

SettingsScreen.navigationOptions = {
  title: 'Open Road',
};
