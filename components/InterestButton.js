import React from 'react';
import { TextInput, Text, Dimensions, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export class InterestButton extends React.Component  {
    
    render(){
    
    const interest1 = this.props.interest1;
    const interest2 = this.props.interest2;


    return (
        <View style={styles.container}>
        <ActionButton buttonTextStyle = {styles.actionButtonText} size = {90} buttonText = {interest1} position = 'left' buttonColor="#FFCE07">
        </ActionButton>
        <ActionButton buttonTextStyle = {styles.actionButtonText} size = {90} buttonText = {interest2} buttonColor="#FFCE07">
        </ActionButton>
      </View>
    );
  }
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10
    },
    actionButtonText: {
        color: 'black',
        fontSize: 11
    }
});


  