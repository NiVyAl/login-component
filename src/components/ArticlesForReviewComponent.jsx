import React, { Component } from 'react';
import checkAccessibility from '../service/checkAccessibility';
import TranslatableText from './service/TranslatableText';
import ArticlesComponent from './ArticlesComponent';
import {Link} from 'react-router-dom';
import ApiService from "../service/ApiService";
import ErrorPopupComponent from './service/ErrorPopupComponent';

/**
 * Страница "Статьи ожидающие рецензии" (для рецензента), отображает все статьи отправленные рецензенту
 */
class ArticlesForReviewComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            articles: [],
        }
    }

    /**
     *  фильтр для статей требующих рецензирования 
     */

    PendingReviewerSelectionFilter = {id: "PROCESSING", text: "Ожидают рецензирования", isChecked: true};

    FilterName = "filter-radio";
    FilterData = [  {id: "all", text: {ru: "Все статьи", en: "All articles"}},
                    this.PendingReviewerSelectionFilter,
                    {id: "APPROVED", text: {ru: "Приняты", en: "Accepted аrticles"}},
                    {id: "REJECTED", text: {ru: "Отклонены", en: "Rejected articles"}}
                 ];

    componentDidMount() {
        if (!checkAccessibility(["REVIEW_PRIVILEGE"]))
            window.location.href="/";

        ApiService.getReviewerArticles(localStorage.getItem("userId"))
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
                    ru: "Статьи ожидающие Вашей рецензии",
                    en: "Articles",
                    }}/>
                </h2>

                <ArticlesComponent data={this.state.articles} filterData={this.FilterData} filterName={this.FilterName} renderButton={
                        (item) => (
                            <React.Fragment>
                                {(item.verdict === this.PendingReviewerSelectionFilter.id) &&
                                    <Link to={`/addReview?id=${item.articleId}`} className="articles-container__button-edit-status button" id={item.articleId} >Добавить рецензию</Link>
                                }
                            </React.Fragment> 
						)
					}
				/>

                <ErrorPopupComponent isOpen={this.state.showErrorPopup} onClose={this.handleClosePopup} />
            </div>
        )
    }
}

export default ArticlesForReviewComponent;