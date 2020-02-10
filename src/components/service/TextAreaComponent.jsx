import React, { Component } from 'react';

class TextAreaComponent extends Component {
    render() {
        return(
            <textarea className="text-area" placeholder={this.props.text} onChange={this.props.handleChange} id={this.props.name}></textarea>
        )
    }
}

export default TextAreaComponent;