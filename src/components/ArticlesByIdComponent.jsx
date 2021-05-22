import React, { Component } from 'react';
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
    filterData = [{id: "all", text: {ru: "Все статьи", en: "All articles"}, isChecked: true},];

    componentDidMount() {
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