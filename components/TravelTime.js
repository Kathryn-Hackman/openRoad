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
    return (h + 'h' + ' ' + m + 'm');
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

  styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor:'#ff9800',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'

  },
  textStyle: {
    fontFamily: 'work-sans',
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  body: {
    marginTop: 10,
    fontFamily: 'work-sans',
    color: '#eef9fe',
    fontSize: 10,
    color: '#eef9fe'

  },
})


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
    <View style = {{flexDirection:'row'}}>
      <View style={{alignSelf:"flex-end", marginLeft:'23%', }}>
        <Text style = {this.styles.body}>Travel time: {this.secToHour(this.state.data)} </Text>
        <TouchableOpacity style = {this.styles.buttonStyle} onPress={() => this.props.navigation.navigate('Settings',{wholeParams:this.props.wholeParams,startList:this.props.startList,endList:this.props.endList})}>
          <Text style = {this.styles.textStyle}>Add a stop</Text>
        </TouchableOpacity>
      </View>
    </View>

    );
  }
}
