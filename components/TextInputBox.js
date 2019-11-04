import React from 'react';
import { TextInput, Text, View} from 'react-native';

export class TextInputBox extends React.Component  {
  state = {
    text: ''
  };
  //label = "starti";

  render(){
    return (
		<View>
		  <Text>{this.props.label}</Text>
		  <TextInput
			value={this.state.text}
			onChangeText={text => this.setState({ text })}
		  />
		  
		</View>
    );
  }
}