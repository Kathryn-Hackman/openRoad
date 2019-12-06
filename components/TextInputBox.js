import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';



export class TextInputBox extends React.Component  {
  state = {
    text: ''
  };

  //label = "start";
  changeTexts(textVal){
  	this.setState({textVal})
  	this.props.handler(textVal);
  }


  //label = "starti";
//dataDetectorTypes 'address'
//autoCompleteType 'street-address'
//onSubmitEditing {nativeEvent: {text, eventCount, target}}

  render(){
    return (
		<View style={styles.container}>
		  <Text>{this.props.label}</Text>
		  <TextInput
      placeholder='enter address'
			value={this.state.text}
			onChangeText={
				this.changeTexts(this.state.text)
			}
		  />
		  
		</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
});