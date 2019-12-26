import React, { Component } from 'react';

class InputComponent extends Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}
	
	active = (e) => {
		// console.log(e.target.id);
		this.ref.current.classList.add("input-container__label--active")
	}
	
	blur = (e) => {
		if (e.target.value == false) {
			this.ref.current.classList.remove("input-container__label--active")
		}
	}
	
	render() {
		return(
			<div className="input-container">
				{this.props.isRequired &&
					<input type={this.props.type} id={this.props.name} className="input-container__input" maxLength={this.props.maxLength} onChange={this.props.handleChange} onFocus={this.active} onBlur={this.blur} required/>
				}
				{this.props.isRequired === false &&
					<input type={this.props.type} id={this.props.name} className="input-container__input" maxLength={this.props.maxLength} onChange={this.props.handleChange} onFocus={this.active} onBlur={this.blur}/>
				}
				<label ref={this.ref} htmlFor={this.props.name} className="input-container__label">{this.props.text}</label>
			</div>
		)
	}
}

export default InputComponent