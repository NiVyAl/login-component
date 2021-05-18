import React, {Component} from 'react';
import translateText from '../../service/translateText';
import SelectSearch from 'react-select-search';

class SeachComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    // options = [
    //     {name: 'Swedish', value: 'sv'},
    //     {name: 'English', value: 'en'},
    //     {
    //         type: 'group',
    //         name: 'Group name',
    //         items: [
    //             {name: 'Spanish', value: 'es'},
    //         ]
    //     },
    // ];

    componentDidMount() {
        this.setState({text: translateText(this.props.placeHolder)});
    }

    render() {
        return(
            <div className="find header__find">
                {this.state.text &&
                    <input type="text" className="find__input" placeholder={this.state.text}/>
                    // <SelectSearch options={this.options} value="sv" name="language" placeholder="Choose your language" printOptions = "never"/>
                }
            </div>
        )
    }
}

export default SeachComponent