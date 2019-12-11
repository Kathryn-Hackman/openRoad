import React from 'react';
import { TextInput, Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

export class TotalRoute extends React.Component  {

  render(){//you need to set a title
    return (
		<View style={styles.container}>
		  <Text>{this.props.title}</Text>
		  
		</View>
    );
  }
}


export class Waypoint extends React.Component  {

  render(){
    return (
    <View>
      <TouchableOpacity style={{ backgroundColor: "#FFCA35", borderWidth: 3, borderColor: "#0DC2D1", height: 100}}>
        <Text>{JSON.stringify(this.props.location)}</Text>
      </TouchableOpacity>
      
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