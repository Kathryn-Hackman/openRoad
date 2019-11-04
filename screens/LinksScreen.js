import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import TextInputMultiline from '../TextInput';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <TextInputMultiline placeholderText={'Start Address'}/>
      <TextInputMultiline placeholderText={'End Address'}/>
      <Buttton title = "andiamo!" onPress={() => navigate('Links')} Button/>
    </ScrollView>
  );
}
//button onpress - send to backend
LinksScreen.navigationOptions = {
  title: 'user input',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
});
