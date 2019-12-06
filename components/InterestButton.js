import React from 'react';
import { TextInput, Text, Dimensions, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

export class InterestButton extends React.Component  {
    
    render(){
    
    const interest = this.props.interest;

    return (
		<View>
		  <Button title = {this.props.interest}></Button> 
		</View>
    );
  }
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
interestsButton: {
    //paddingTop: 0.2,
    flexDirection: 'row',
    marginTop: 0.05 * height,
    marginLeft: 0.08 * width,
    height: height * 0.09,
    width: height * 0.09,
    borderRadius: height * 0.09,
    backgroundColor: 'rgb(195,125,198)',
  },
})


  