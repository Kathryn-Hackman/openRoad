import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Button} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { TextInputBox } from '../components/TextInputBox';

var url = "https://openroadflaskapp.herokuapp.com/";
//url = 'http://'+ ipAddr  +':5000/'//manually enter your ip address

var startTest = "address 1"
var endTest = "address 2"
var name = "New Journey 7"




import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  start: t.String,
  destination: t.maybe(t.String),
  budget: t.String,
  days: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
  stylesheet: formStyles,
};

export default class LinksScreen extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  
	console.log("Creating New Journey...");
	console.log(url+'newJourney?start='+encodeURIComponent(value.start)+"&end="+encodeURIComponent(value.destination)+"&name="+encodeURIComponent(this.name));
	fetch(
		(url+'newJourney?start='+encodeURIComponent(value.start)+"&end="+encodeURIComponent(value.destination)+"&name="+encodeURIComponent("nj"))
	)
		.then(res => res.json())
		.then(json => {
			console.log("Call response:");
			console.log(json);
			console.log("New Journey Created.");
		});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <Button
          title="Create Journey!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
