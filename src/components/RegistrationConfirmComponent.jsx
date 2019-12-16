import React, { Component } from 'react';
import axios, { post } from 'axios';
import url from '../url.js'

class RegistrationConfirmComponent extends Component {
	// constructor(props)  {
	// 	super(props);
	// }
	
	postToken = async event => {
		let data = window.location.href;
		for (let i = 0; i < data.length; i++) {
			if (data[i] === "=") {
				data = data.slice(i+1, data.length);
				break
			}
		}
		console.log(data);
		try {
			const response = await axios.post(url, { data });
			console.log('Returned data:', response);
		 } catch (e) {
			console.log(`Axios request failed: ` + e);
		 }
	}
	
	render() {
		return(
			<div onLoad={this.postToken()}>
				confirm
				<button onClick={this.postToken}>Отправить</button>
			</div>
		)
	}
}

export default RegistrationConfirmComponent;