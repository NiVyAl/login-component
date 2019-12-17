import React, { Component } from 'react';
import axios, { post } from 'axios';
import url from '../url.js'

class RegistrationConfirmComponent extends Component {
	constructor(props)  {
		super(props);

		this.state = {
			isResponce: false,
		}
	}
	
	postToken = async event => {
		let data = window.location.href;
		let newData = "";
		for (let i = 0; i < data.length; i++) {
			if (data[i] === "=") {
				newData = data.slice(i+1, data.length);
				break
			}
		}
		console.log(newData);
		if (newData !== "") {
			try {
				const response = await axios.post(url, { data });
				const responce2 = 200;
				this.state.isResponce = responce2;
				console.log('Returned data:', response);
			 } catch (e) {
				const responce2 = 200;
				this.state.isResponce = responce2;
				console.log(this.state.isResponce);
				console.log(`Axios request failed: ` + e);
			 }
		}	
	}
	
	render() {
		return(
			<div onLoad={this.postToken()}>
				confirm
				<button onClick={this.postToken}>Отправить</button>
				<div className="confirm">
					<h2 className="sub-title confirm__title">Подтверждение email</h2>
					{this.state.isResponce &&
						<p className="confirm__text">email подтвержден!</p>
					}
					{this.state.isResponce === false &&
						<p className="confirm__text">произошла ошибка подтверждения</p>
					}
					
				</div>
			</div>
		)
	}
}

export default RegistrationConfirmComponent;