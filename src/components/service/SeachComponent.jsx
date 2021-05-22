import React, {Component} from 'react';
import translateText from '../../service/translateText';
import SelectSearch from 'react-select-search';
import ApiService from "../../service/ApiService";

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

        // ApiService.getArticles(localStorage.getItem("userId"))
        // .then((response) => {
        //         if (response.data.length > 0) {
        //             this.setState({articles: response.data.reverse()})
        //         }
        // })
        // .catch((err) => {
        //     this.setState({ showErrorPopup: true });
        // })
    }

    render() {
        return(
            <div className="find header__find">
                {this.state.text &&
                    <input type="text" className="find__input" placeholder={this.state.text}/>
                    // <SelectSearch options={this.state.articles} value="sv" name="language" placeholder="Choose your language"/>
                }
            </div>
        )
    }
}

export default SeachComponent