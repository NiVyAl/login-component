import React, { Component } from 'react';
import Language from './LanguageContext' 

class TranslatableText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
        }
    }

    componentDidMount() {
        const text = this.props.text[Language["_currentValue"]];
        if (text) {
            this.setState({text: this.props.text[Language["_currentValue"]]})
        } else {
            this.setState({text: this.props.text["ru"]})
        }
        
    }

    render() {
        return(
            <span>{this.state.text}</span>
        )
    }
}

export default TranslatableText;