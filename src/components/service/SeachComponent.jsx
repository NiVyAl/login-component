import React, {Component} from 'react';
import translateText from '../../service/translateText';
import SelectSearch from 'react-select-search';
import ApiService from "../../service/ApiService";

class SeachComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isDataLoad: false,
        }
    }

    componentDidMount() {
        this.setState({text: translateText(this.props.placeHolder)});
    }

    loadArticles = async () => {
        if (this.state.isDataLoad)
            return;

        let privileges = JSON.parse(localStorage.getItem("privilege"))

		if (privileges === null || privileges === undefined)
			return;

        let _articles = [];

        privileges.forEach(async(i) => {
            if (i === "WRITE_PRIVILEGE") {
                await ApiService.getArticles(localStorage.getItem("userId"))
                    .then((response) => {
                        if (response.data.length > 0) {
                            _articles = _articles.concat(response.data);
                            this.setState({articles: _articles});
                            this.setState({isDataLoad: true});
                        }
                    })
            }
            if (i === "REVIEW_PRIVILEGE") {
                await ApiService.getReviewerArticles(localStorage.getItem("userId"))
                    .then((response) => {
                        if (response.data.length > 0) {
                            _articles = _articles.concat(response.data);
                            this.setState({articles: _articles});
                            this.setState({isDataLoad: true});
                        }
                    })
            }
            if (i === "ADD_PRIVILEGE") {
                await ApiService.getAllArticles(localStorage.getItem("userId"))
                    .then((response) => {
                        if (response.data.length > 0) {
                            _articles = _articles.concat(response.data);
                            this.setState({articles: _articles});
                            this.setState({isDataLoad: true});
                        }
                    })
            }
        });
    }

    handleChange = (e) => {
        console.log(e.target.value);
        console.log(this.state.articles);
        
    }

    render() {
        return(
            <div className="find header__find">
                {this.state.text &&
                    <input type="text" className="find__input" placeholder={this.state.text} onFocus={this.loadArticles} onChange={this.handleChange}/>
                    // <SelectSearch options={this.state.articles} value="sv" name="language" placeholder="Choose your language"/>
                }
            </div>
        )
    }
}

export default SeachComponent