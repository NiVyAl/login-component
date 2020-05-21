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

        this.radioData = [{id: "all", text: "Все", isChecked: true}, {id: 31, text: "Отправлены на проверку(31)"}, {id: 25, text: "Требуют доработку"}, {id: 18, text: "Приняты"}, {id: 15, text: "Отклонены"}];
    }

    filterArticles = (e) => {
        e.target.classList.add("button--active");
        // console.log(e.target.id)
        switch (e.target.id) {
            case "all": 
                this.setState({filter: "all"});
                break;
            case "31": 
                this.setState({filter: 31});
                break;
            default: 
                this.setState({filter: "all"});
                break;
        }
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
                <ul className="articles-categories">
                    <li className="articles-categories__item">
                        <button onClick={this.filterArticles} id="all" className="articles-categories__button button">Все</button>
                    </li>
                    <li className="articles-categories__item">
                        <button onClick={this.filterArticles} id="31" className="articles-categories__button button">Отправлены на проверку(31)</button>
                    </li>
                    <li className="articles-categories__item">
                        <button className="articles-categories__button button">Требуют доработку</button>
                    </li>
                    <li className="articles-categories__item">
                        <button className="articles-categories__button button">Отправлены на повторную проверку</button>
                    </li>
                    <li className="articles-categories__item">
                        <button className="articles-categories__button button">Приняты</button>
                    </li>
                    <li className="articles-categories__item">
                        <button className="articles-categories__button button">Отклонены</button>
                    </li>
                </ul>
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
