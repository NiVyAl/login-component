import React, { Component } from 'react';
import ApiService from "../service/ApiService";

/**
 * Страница с подтверждением email (при клике по ссылке в письме)
 */
class RegistrationConfirmComponent extends Component {
	constructor(props)  {
		super(props);

		this.state = {
			isConfirm: false,
		}
		this.window = React.createRef();
	}

	componentDidMount() {
		this.sendToken();
	}
	
	sendToken = () => {
		let data = window.location.href;
			let newData = "";
			for (let i = 0; i < data.length; i++) {
				if (data[i] === "?") {
					newData = data.slice(i+1, data.length);
					break
				}
			}
		console.log(newData);
		if (newData !== "") {
			ApiService.registrationConfirm(newData)
				.then((res) => {
					console.log(res)
					if (res.status === 200) {
						console.log("ok");
						this.setState({isConfirm: true})
						this.window.current.classList.remove("load");
					}
				})
		}
	}
	
	
	
	render() {
		return(
			<div className="confirm window load" ref={this.window}>
				<h2 className="sub-title confirm__title">Подтверждение email</h2>
				
				{this.state.isConfirm &&
					<p className="confirm__text">email подтвержден!</p>
				}
				
			</div>
		)
	}
}

export default RegistrationConfirmComponent;