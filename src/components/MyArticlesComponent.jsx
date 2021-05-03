import React, { Component } from 'react';
import checkAccessibility from '../service/checkAccessibility';
import TranslatableText from './service/TranslatableText';
import ArticlesComponent from './ArticlesComponent';
import {Link} from 'react-router-dom';
import ApiService from "../service/ApiService";

class MyArticlesComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            articles: [],
        }
    }
    filterData = [{id: "all", text: {ru: "Все статьи", en: "All articles"}, isChecked: true}, {id: 16, text: "Находятся на рецензировании"}, {id: 25, text: "Требуют доработки"}, {id: 18, text: "Приняты"}, {id: 15, text: "Отклонены"}];
	filterName = "filter-radio";

    componentDidMount() {
        if (!checkAccessibility(["WRITE_PRIVILEGE"]))
            window.location.href="/";

        ApiService.getArticles(localStorage.getItem("userId"))
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
            </div>
        )
    }
}

export default MyArticlesComponent;