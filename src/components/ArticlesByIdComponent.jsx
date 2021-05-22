import React, { Component } from 'react';
import TranslatableText from './service/TranslatableText';
import ArticlesComponent from './ArticlesComponent';
import {Link} from 'react-router-dom';
import ApiService from "../service/ApiService";
import ErrorPopupComponent from './service/ErrorPopupComponent';
import queryString, { stringify } from 'query-string';

/**
 * Страница "Мои статьи", отображает все статьи отправленные пользователем на рецензирование
 */
class MyArticlesComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            articles: [],
        }
    }

    componentDidMount() {
        let GetRequest = queryString.parseUrl(window.location.href);

        // получаем статью по ее id
        if (GetRequest.query.id && GetRequest.query.id !== "") {
            ApiService.getArticle(GetRequest.query.id)
            .then((response) => {
                    if (response.data.length > 0) {
                        this.setState({articles: response.data.reverse()})
                    }
            })
            .catch((err) => {
                this.setState({ showErrorPopup: true });
            })
        }

        // получаем статьи по переданной категории
        if (GetRequest.query.category && GetRequest.query.category !== "") {
            ApiService.getArticlesByCategoy(GetRequest.query.category)
            .then((response) => {
                    if (response.data.length > 0) {
                        this.setState({articles: response.data.reverse()})
                    }
            })
            .catch((err) => {
                this.setState({ showErrorPopup: true });
            })
        }
    }

    /**
     * Метод закрытия модального окна ошибки
     */
    handleClosePopup = () => {
        this.setState({ showErrorPopup: false });
    }
    
    render() {
        return(
            <div className="window profile">
                <h2 className="sub-title window__title"><TranslatableText 
                    text={{
                    ru: "Найденные статьи",
                    en: "Found articles",
                    }}/>
                </h2>

                <ArticlesComponent data={this.state.articles} isFilterHidden={true} renderButton={
                    (item) => (
                        <React.Fragment></React.Fragment>
                    )
					}
				/>

                <ErrorPopupComponent isOpen={this.state.showErrorPopup} onClose={this.handleClosePopup} />
            </div>
        )
    }
}

export default MyArticlesComponent;