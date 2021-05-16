import React, { Component } from 'react';
import checkAccessibility from '../service/checkAccessibility';
import TranslatableText from './service/TranslatableText';
import ArticlesComponent from './ArticlesComponent';
import {Link} from 'react-router-dom';
import ApiService from "../service/ApiService";
import ErrorPopupComponent from './service/ErrorPopupComponent';

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

    filterName = "filter-radio";
    filterData = [  {id: "all", text: {ru: "Все статьи", en: "All articles"}, isChecked: true},
                    {id: 16, text: "Находятся на рецензировании"},
                    {id: 25, text: "Требуют доработки"},
                    {id: 18, text: {ru: "Приняты", en: "Accepted аrticles"}},
                    {id: 15, text: {ru: "Отклонены", en: "Rejected articles"}}
                 ];

    componentDidMount() {
        if (!checkAccessibility(["WRITE_PRIVILEGE"]))
            window.location.href="/";

        ApiService.getArticles(localStorage.getItem("userId"))
        .then((response) => {
                if (response.data.length > 0) {
                    this.setState({articles: response.data.reverse()})
                }
        })
        .catch((err) => {
            this.setState({ showErrorPopup: true });
        })
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
                    ru: "Мои статьи",
                    en: "My articles",
                    }}/>
                </h2>

                <ArticlesComponent data={this.state.articles} filterData={this.filterData} filterName={this.filterName} renderButton={
                        (item) => (
							<Link to={`/addArticle/step1?articleId=${item.articleId}`} className="articles-container__button-edit-status button" id={item.articleId}><TranslatableText 
								text={{
								ru: "Редактировать",
								en: "Edit article",
								}}/>
							</Link>	
						)
					}
				/>

                <ErrorPopupComponent isOpen={this.state.showErrorPopup} onClose={this.handleClosePopup} />
            </div>
        )
    }
}

export default MyArticlesComponent;