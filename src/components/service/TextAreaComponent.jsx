import React, { Component } from 'react';
import TranslatableText from './TranslatableText';

class TextAreaComponent extends Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();
        this.label = React.createRef();
    }

    componentDidMount() {
        this.setValue(); // устанавливает значение по умолчанию (если есть)
        if (this.props.required) {
			this.input.current.required = true;
		}
	}

	setValue() { 
		if (this.props.value) {
			this.input.current.value = this.props.value;
			// let e = {target: {id: this.input.current.id, value: this.props.value}};
            this.props.handleChange(this.input.current.id, this.props.value);
            this.active();
        }
        
        if (this.props.noPostValue) {
            this.input.current.value = this.props.noPostValue;
            this.active();
        }
    }

    active = (e) => {
		this.label.current.classList.add("text-area__input--active");
		this.label.current.classList.add("label--active");
	}
	
	blur = (e) => {
		if (!e.target.value) {
			this.label.current.classList.remove("text-area__input--active");
			this.label.current.classList.remove("label--active");
		}
	}
    
    render() {
        return(
            <div className="text-area">
                <label ref={this.label} htmlFor={this.props.name} className="text-area__label label"><TranslatableText text={this.props.text}/></label>
                <textarea ref={this.input} className="text-area__input" onChange={(e) => this.props.handleChange(this.props.name, e.target.value)} onFocus={this.active} onBlur={this.blur} id={this.props.name} autoComplete={this.props.autoComplete}></textarea>
            </div>
        )
    }
}

export default TextAreaComponent;