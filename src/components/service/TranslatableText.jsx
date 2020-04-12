import React, { Component } from 'react';
import Language from './LanguageContext' 

class TranslatableText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // text: "",
        }
    }

    componentDidMount() {
        const texts = this.props.text;
        if (typeof texts === "string") {
            this.setState({text: texts});
        } else {
            this.setState({text: texts[Language["_currentValue"]]})
        }
    }

    render() {
        return(
            <span>
            {this.state.text &&
                this.state.text
            }
            </span>
        )
    }
}

export default TranslatableText;