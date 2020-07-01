import React, { Component } from 'react';
import translateText from '../../service/translateText';

class TranslatableText extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
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