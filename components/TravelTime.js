import React from 'react';
import { TextInput, Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class TravelTime extends React.Component {//same as TravelTimeTwo but capable of handling async data
  constructor(props) {
    super();
    //console.log('This happens 3rd.');
    this._isMounted = false;
    this.state = {
      loading: 'initial',
      data: ''
    };


 
    //console.log('This happens 1st.');



  }
  secToHour(x){
    var h = Math.floor(x / 3600); 
    var m = Math.floor(x % 3600 / 60);
    return h + ' hour' + (h!=1?('s'):('')) + (m!=0?( ' and ' + m + ' minutes' ):(''));
  }
  
  loadData(startList,endList) {
    const url = "https://openroadflaskapp.herokuapp.com/";
    var start = startList[startList.length-1];
    console.log("START VAAAAAAL")
    console.log(start)
    var end = endList[0];
    console.log("END VAAAAAAL")
    console.log(end)
    const fullUrl = url+'driveTime?start='+encodeURIComponent(start.addr)+"&end="+encodeURIComponent(end.addr)
    var promise = new Promise((resolve, reject) => { 
    fetch(fullUrl)
      .then(res => res.json())
      .then(json => {
        resolve(json.time);
      });
    });

    //console.log('This happens 4th.');

    return promise;
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({ loading: 'true' });
    this.loadData(this.props.startList,this.props.endList)
    .then((data) => {
      //console.log('This happens 7th.');
      console.log("CALLING CALLBACK")
      this.props.callbackParam(data);
      this.setState({
        data: data,
        loading: 'false'
      });
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  render() {

    if (this.state.loading === 'initial') {
      //console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
      return <Text>Intializing...</Text>;
    }


    if (this.state.loading === 'true') {
      //console.log('This happens 5th - when waiting for data.');
      return <Text>Loading...</Text>;
    }

    //console.log('This happens 8th - after I get data.');

    return (
    <View>
      <Button title = {this.props.keyString + " Travel time: " + this.secToHour(this.state.data) + ". (Click to add a stop!)"} onPress={() => this.props.navigation.navigate('Settings',{wholeParams:this.props.wholeParams,startList:this.props.startList,endList:this.props.endList})}/>
      
    </View>
    );
  }
}
