import React from 'react';
import { TextInput, Text, View} from 'react-native';



export class TextInputBox extends React.Component  {
  state = {
    text: ''
  };
  //label = "start";
  changeTexts(textVal){
  	this.setState({textVal})
  	this.props.handler(textVal);
  }

  render(){
    return (
		<View>
		  <Text>{this.props.label}</Text>
		  <TextInput
			value={this.state.text}
			onChangeText={
				this.changeTexts(this.state.text)
			}
		  />
		  
		</View>
    );
  }
}