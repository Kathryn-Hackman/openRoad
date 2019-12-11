import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Image } from 'react-native-elements';





export class Waypoint extends React.Component  {
  secToHour(x){
    var h = Math.floor(x / 3600); 
    var m = Math.floor(x % 3600 / 60);
    return (h + 'h' + ' ' + m + 'm');
  }



  render(){
    const {location} = this.props;
    return (
      <View>
        <View style={styles.header}>
          <View style={{zIndex: 1}}><Image source = {require('../assets/images/group_41.png')} style = {{width: 40, height: 40, marginLeft: -20, marginTop: -5}}></Image></View>
          <View style={styles.box}>
            <Text style={styles.title}>{location.name}</Text>
          </View>

        </View>

        <View style = {styles.body}>
          <Text style = {styles.addr}>{location.addr}</Text>
          <Text style = {styles.timeSpent}>Time spent here: {this.secToHour(location.time)}</Text>
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
  body: {
    alignSelf: 'flex-end',
    width: '76%',
    marginTop: 10,
    fontFamily: 'work-sans',
    color: '#eef9fe'
  },
  addr: {
    fontSize: 10,
    color: '#eef9fe'

  },
  timeSpent: {
    fontSize: 12,
    color: '#eef9fe'
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
    fontFamily: "work-sans-regular",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    textAlign: "left",
    textAlignVertical: 'center',
    marginTop: 6,
    color: "#777777",
    marginLeft: 30
  }
});