import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Image } from 'react-native-elements';





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
        <View style={styles.header}>
          <View style={{zIndex: 1, position:"absolute"}}><Image source = {require('../assets/images/group_41.png')} style = {{width: 40, height: 40, marginLeft: -20, marginTop: -5}}></Image></View>
          <View style={styles.box}>
            <Text style={styles.title}>{location.name}</Text>
          </View>

        </View>

        <View>
          <Text>{location.addr}</Text>
        </View>

        <View>
          <Text>Time spent here:</Text>
          <Text>{this.secToHour(location.time)}</Text>
        </View>

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

  header:{
    alignSelf: 'flex-end',
    width: '88%',
    marginTop: 10,
    flexDirection: 'row',
  },
  box:{
    alignSelf: 'flex-end',
    height: 30,
    width:'100%',
    backgroundColor: "#eef9fe",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    flexDirection: 'row',
  },
  title:{
    fontFamily: "work-sans",
    fontSize: 20,
    textAlign: "left",
    color: "#777777",
    marginLeft: 15
  }
});