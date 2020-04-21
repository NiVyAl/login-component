import React, {Component} from 'react';
import translateText from '../../service/translateText';

class SeachComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        this.setState({text: translateText(this.props.placeHolder)});
    }

    render() {
        return(
            <div className="find header__find">
                {this.state.text &&
                    <input type="text" className="find__input" placeholder={this.state.text}/>
                }
            </div>
        )
    }
}

export default SeachComponent