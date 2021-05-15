import React, { Component } from 'react';
import checkAccessibility from '../service/checkAccessibility';
import TranslatableText from './service/TranslatableText';
import ArticlesComponent from './ArticlesComponent';
import {Link} from 'react-router-dom';
import ApiService from "../service/ApiService";

/**
 * Страница "Статьи ожидающие рецензии" (для рецензента), отображает все статьи отправленные рецензенту
 */
class MyArticlesComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            articles: [],
        }
    }

    /**
     *  фильтр для статей требующих рецензирования 
     */
    PendingReviewerSelectionFilter = [{id: 39, text: "Ожидают рецензирования"}, {id: 47, text: "Ожидают повторного рецензирования"}];
    FilterName = "filter-radio";
    FilterData = [  {id: "all", text: {ru: "Все статьи", en: "All articles"}, isChecked: true},
                    {id: 18, text: "Отправлены на доработку"}, 
                    {id: 15, text: "Отклонены"}, 
                    {id: 23, text: "Приняты"}
                ];
    FilterData = this.FilterData.concat(this.PendingReviewerSelectionFilter);
		

    componentDidMount() {
        if (!checkAccessibility(["REVIEW_PRIVILEGE"]))
            window.location.href="/";

        ApiService.getReviewerArticles(localStorage.getItem("userId"))
			.then((response) => {
					if (response.data.length > 0) {
						this.setState({articles: response.data.reverse()})
					}	
			})	
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
                                {(item.articleId === this.PendingReviewerSelectionFilter[0].id || item.articleId === this.PendingReviewerSelectionFilter[1].id) && // item.articleId Заменить на item.state
                                    <Link to={`/addReview?id=${item.articleId}`} className="articles-container__button-edit-status button" id={item.articleId} >Добавить рецензию</Link>
                                }
                            </React.Fragment> 
						)
					}
				/>
            </div>
        )
    }
}

export default MyArticlesComponent;