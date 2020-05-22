import React, { Component } from 'react';
import ArticleComponent from "./service/ArticleComponent";
import RadioButtonComponent from "./service/RadioButtonComponent";

class ArticlesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // filter: 31,
            // filter: "all", // все статьи
        }

        this.radioData = [{id: "all", text: {ru: "Все статьи", en: "All articles"}, isChecked: true}, {id: 16, text: "Отправлены на проверку"}, {id: 25, text: "Требуют доработки"}, {id: 18, text: "Приняты"}, {id: 15, text: "Отклонены"}];
    }

    componentDidMount = () => {
        console.log(this.props.data);
    }

    radioChange = (id) => {
        // console.log(id);
        this.setState({filter: id});
    }

    render() {
        return(
            <React.Fragment>
                <RadioButtonComponent data={this.radioData} name="filter-radio" radioChange={this.radioChange}/>
                {this.props.data &&
                    <ul className="articles-container__list">
                        {this.props.data.map(item =>
                            <React.Fragment key={item.articleId}>
                                {(item.articleId === this.state.filter || this.state.filter === "all") && // здесь проверяем на нужный state
                                    <li className="articles-container__item">
                                        <ArticleComponent item={item} isOpen={this.state[item.articleId + "btnMore"]}/>
                                        <a href={`/addArticle/step1?articleId=${item.articleId}`} className="articles-container__button-edit-status button" id={item.articleId}>Редактировать</a>
                                    </li>
                                } 
                            </React.Fragment>
                        )}
                    </ul>
                }
            </React.Fragment>
        )
    }
}

export default ArticlesComponent;
