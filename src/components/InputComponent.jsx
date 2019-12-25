import React, { Component } from 'react';

class InputComponent extends Component {
	render() {
		return(
			<div className="input-container">
				<input type="name" id={this.props.name} className="input-container__input" maxLength="20" onChange={this.handleChange} required/>
				<label htmlFor={this.props.name} className="input-container__label">{this.props.text}</label>
			</div>
		)
	}
}

export default InputComponent