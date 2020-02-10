import React, { Component } from 'react';
import InputComponent from "../service/InputComponent";

class InputFileComponent extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
		}
	}
	
	render() {
		return(
			<div className="input-file">		
				<div className="input-file__description">
					<InputComponent text="Описание файла" name={`file${this.props.id}Description`} handleChange={this.props.handleChange} type="text" maxLength="100" required/>
				</div>
				
				<input className="input-file__input" type="file" id={this.props.id} ></input>
			</div>
		)
	}
}

export default InputFileComponent;