import React from 'react';
import { TextInput, Text, View} from 'react-native';

export class JourneyInputForm extends React.Component  {
	constructor(props){
		super(props);
		this.startHandler = this.startHandler.bind(this);
		this.endHandler = this.endHandler.bind(this);
	}
	

	state = {
		start: "",
		end: "",
	};

	startHandler(valInput) {
		this.setState({
			start: valInput
		})
	}

	endHandler(valInput) {
		this.setState({
			end: valInput
		})
	}

createNewJourney(start,end) {
  
		console.log("Creating New Journey...");
		fetch(
			url+'newJourney?start='+encodeURIComponent(start)+"&end="+encodeURIComponent(end)+"&name="+encodeURIComponent(name)
		)
			.then(res => res.json())
			.then(json => {
				console.log("Call response:");
				console.log(json);
				console.log("New Journey Created.");
			});
	}

	render(){
		return (
			<View>
				<TextInputBox label='Start' handler={this.startHandler}></TextInputBox>
				<TextInputBox label='Destination' handler={this.endHandler}></TextInputBox>
				<Button label='Create Journey' onPress={() => createNewJourney(state.start,state.end)}></Button>
			</View>
		);
	}


}