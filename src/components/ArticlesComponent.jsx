import React, { Component } from 'react';
import ArticleComponent from "./service/ArticleComponent";

class ArticlesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount = () => {
        console.log(this.props.data);
    }

    render() {
        return(
            <React.Fragment>
                {this.props.data &&
                    <ul className="articles-container__list">
                        {this.props.data.map(item =>
                            <li className="articles-container__item" key={item.articleId}>
                                <ArticleComponent item={item} isOpen={this.state[item.articleId + "btnMore"]}/>
                                <p className="articles-container__text-button text-button" id={item.articleId + "btnMore"} onClick={this.openMore}>Больше информации</p>
                                <a href={`/addArticle/step1?articleId=${item.articleId}`} className="articles-container__button-edit-status button" id={item.articleId}>Редактировать</a>
                            </li>
                        )}
                    </ul>
                }
            </React.Fragment>
        )
    }
}

export default ArticlesComponent;
