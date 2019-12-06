//user interests screen irl
import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements';

import '@expo/vector-icons';

export default function SettingsScreen() {
  state = {
    checked: false,
  };
  return (
    <ScrollView>
      <Text>What are your interests?</Text>
      <View style = {{ flexDirection: 'row'}}>
        <CheckBox
          checked ={this.state.checked}
          onPress ={() => this.setState({checked: !this.state.checked})}
        />
        <Text style = {{marginTop: 17}}>Hiking</Text>
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
  title: 'Open Road',
};
