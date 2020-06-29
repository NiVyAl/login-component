import React, { Component } from 'react';
import translateText from '../../service/translateText';

class TranslatableText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // text: "",
        }
    }

    componentDidMount() {
        // const texts = this.props.text;
        // if (typeof texts === "string") {
        //     this.setState({text: texts});
        // } else {
        //     this.setState({text: texts[Language["_currentValue"]]})
        // }
        this.setState({text: translateText(this.props.text)})
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