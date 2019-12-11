import React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

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
  secToHour(x){
    var h = Math.floor(x / 3600); 
    var m = Math.floor(x % 3600 / 60);
    return h + ' hour' + (h!=1?('s'):('')) + (m!=0?( ' and ' + m + ' minutes' ):(''));
  }

  render(){
    const {location} = this.props;
    return (
    <View>
      <TouchableOpacity style={{ backgroundColor: "#FFCA35", borderWidth: 3, borderColor: "#0DC2D1", height: 100}}>
        <Text>{location.name}</Text>
        <Text>{location.addr}</Text>
        <Text>{this.secToHour(location.time)}</Text>
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