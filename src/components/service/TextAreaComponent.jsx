import React, { Component } from 'react';

class TextAreaComponent extends Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();
    }

    componentDidMount() {
		this.setValue(); // устанавливает значение по умолчанию (если есть)
	}

	setValue() { 
		if (this.props.value) {
			this.input.current.value = this.props.value;
			let e = {target: {id: this.input.current.id, value: this.props.value}};
			this.props.handleChange(e);
        }
        
        if (this.props.noPostValue) {
            this.input.current.value = this.props.noPostValue;
        }
    }
    
    render() {
        return(
            <textarea ref={this.input} className="text-area" placeholder={this.props.text} onChange={this.props.handleChange} id={this.props.name}></textarea>
        )
    }
}

export default TextAreaComponent;