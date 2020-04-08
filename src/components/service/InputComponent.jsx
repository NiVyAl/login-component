import React, { Component } from 'react';

class InputComponent extends Component {
	constructor(props) {
		super(props);
		this.label = React.createRef();
		this.input  = React.createRef();
	}
	
	componentDidMount() {
		this.setValue(); // устанавливает значение по умолчанию (если есть)
		if (this.props.readonly) {
			this.input.current.readOnly = true;
		}
		if (this.props.required) {
			this.input.current.required = true;
		}
	}

	setValue() { 
		if (this.props.value) {
			this.input.current.value = this.props.value;
			this.active();
			let e = {target: {id: this.input.current.id, value: this.props.value}};
			this.props.handleChange(e);
		}

		if (this.props.noPostValue) {
			this.input.current.value = this.props.noPostValue;
			this.active();
		}
	}
	
	active = (e) => {
		this.label.current.classList.add("input-container__label--active");
		this.label.current.classList.add("label--active");
	}
	
	blur = (e) => {
		if (!e.target.value) {
			this.label.current.classList.remove("input-container__label--active");
			this.label.current.classList.remove("label--active");
		}
	}
	
	render() {
		return(
			<div className="input-container">
				<input ref={this.input} type={this.props.type} id={this.props.name} className="input-container__input" maxLength={this.props.maxLength} onChange={this.props.handleChange} onFocus={this.active} onBlur={this.blur} autoComplete={this.props.autoComplete}/>
				<label ref={this.label} htmlFor={this.props.name} className="input-container__label label">{this.props.text}</label>
			</div>
		)
	}
}

export default InputComponent