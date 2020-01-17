import React, { Component } from 'react';
import sendInput from "../service/sendInput";

class InputComponent extends Component {
	constructor(props) {
		super(props);
		this.label = React.createRef();
		this.input  = React.createRef();
	}
	
	componentDidMount() {
		// console.log(this.input.current);
		console.log();
	}
	
	active = (e) => {
		// console.log(e.target.id);
		this.label.current.classList.add("input-container__label--active")
	}
	
	blur = (e) => {
		if (!e.target.value) {
			this.label.current.classList.remove("input-container__label--active")
		}
	}
	
	render() {
		return(
			<div className="input-container">
				{this.props.required &&
					<input ref={this.input} type={this.props.type} id={this.props.name} className="input-container__input" maxLength={this.props.maxLength} onChange={sendInput.handleChange} onFocus={this.active} onBlur={this.blur} autoComplete={this.props.autoComplete} required/>
				}
				{this.props.required === undefined &&
					<input ref={this.input} type={this.props.type} id={this.props.name} className="input-container__input" maxLength={this.props.maxLength} onChange={sendInput.handleChange} onFocus={this.active} onBlur={this.blur} autoComplete={this.props.autoComplete}/>
				}
				<label ref={this.label} htmlFor={this.props.name} className="input-container__label">{this.props.text}</label>
			</div>
		)
	}
}

export default InputComponent