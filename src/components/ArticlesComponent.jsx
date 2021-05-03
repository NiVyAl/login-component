import React, { Component } from 'react';
import ArticleComponent from "./service/ArticleComponent";
import RadioButtonComponent from "./service/RadioButtonComponent";

// this.filterData = [{id: "all", text: {ru: "Все статьи", en: "All articles"}, isChecked: true}, {id: 16, text: "Отправлены на проверку"}, {id: 25, text: "Требуют доработки"}, {id: 18, text: "Приняты"}, {id: 15, text: "Отклонены"}];
// this.filterName = "filter-radio";
// data -  (this.state.articles) статьи полученные с сервера
/* <ArticlesComponent data={this.state.articles} filterData={this.filterData} filterName={this.filterName} renderButton={
        (item) => (
            <a href={`/addArticle/step1?articleId=${item.articleId}`} className="articles-container__button-edit-status button" id={item.articleId}>
                Редактировать
            </a>	
        )
    }
/> */

class ArticlesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount = () => {
        console.log(this.props.data);
    }

    radioChange = (id) => { // <RadioButtonComponent> компонент запускает эту функцию при старте (если есть значение по умолчанию)
        this.setState({filter: id});
    }

    render() {
        return(
            <React.Fragment>
                <RadioButtonComponent data={this.props.filterData} name={this.props.filterName} radioChange={this.radioChange}/>
                {this.props.data &&
                    <ul className="articles-container__list">
                        {this.props.data.map(item =>
                            <React.Fragment key={item.articleId}>
                                {(item.articleId === this.state.filter || this.state.filter === "all") && // здесь проверяем на нужный state
                                    <li className="articles-container__item">
                                        <ArticleComponent item={item} isOpen={this.state[item.articleId + "btnMore"]}/>
                                        {this.props.renderButton(item)}
                                    </li>
                                } 
                            </React.Fragment>
                        )}
                    </ul>
                }
                {this.props.data.length === 0 &&
                    <p className="articles-container__no-articles">Здесь пока ничего нет...</p>
                }
            </React.Fragment>
        )
    }
}

export default ArticlesComponent;
