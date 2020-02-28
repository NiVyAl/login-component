import React, { Component } from 'react';

class CheckboxComponent extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div className="checbox-container">
				<input id={this.props.name} type="checkbox" className="checkbox-container__checkbox"/>
				<label htmlFor={this.props.name} className="checkbox-container__label">{this.props.text}</label>
			</div>
		)
	}
}

export default CheckboxComponent