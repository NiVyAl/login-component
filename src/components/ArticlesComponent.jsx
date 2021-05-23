import React, { Component } from 'react';
import ArticleComponent from "./service/ArticleComponent";
import RadioButtonComponent from "./service/RadioButtonComponent";

/**
 * Компонент для вывода списка статей
 */
class ArticlesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount = () => {
        console.log(this.props.data);
        if (this.props.isFilterHidden)
            this.setState({filter: "all"});
    }

    /**
     * Обработчик изменения фильтрации статей
     * @param {параметр по которому происходит фильтрация} id 
     */
    radioChange = (id) => { // <RadioButtonComponent> компонент запускает эту функцию при старте (если есть значение по умолчанию)
        this.setState({filter: id});
    }

    writeArticles = () => {
        let articles = this.props.data.filter(article => article.verdict === this.state.filter || this.state.filter === "all"); // здесь проверяем на нужный state (item.articleId заменить на item.state)
        return(
            <React.Fragment>
                <ul className="articles-container__list">
                    {articles.map(item =>
                        <li className="articles-container__item" key={item.articleId}>
                            <ArticleComponent item={item} isOpen={this.state[item.articleId + "btnMore"]}/>
                            {this.props.renderButton(item)}
                        </li>
                    )}
                </ul>
                {articles.length === 0 &&
                    <p className="articles-container__no-articles">Здесь пока ничего нет...</p>
                }
            </React.Fragment>
        )
    }

    render() {
        return(
            <React.Fragment>
                {!this.props.isFilterHidden &&
                    <RadioButtonComponent data={this.props.filterData} name={this.props.filterName} radioChange={this.radioChange}/>
                }
                
                {this.props.data &&
                    <React.Fragment>
                        {this.writeArticles()}
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default ArticlesComponent;
