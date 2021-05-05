import React, { Component } from 'react';
import checkAccessibility from '../service/checkAccessibility';
import TranslatableText from './service/TranslatableText';
import ArticlesComponent from './ArticlesComponent';
import {Link} from 'react-router-dom';
import ApiService from "../service/ApiService";
import ChooseReviewerComponent from "./ChooseReviewerComponent.jsx";

/**
 * Страница "Статьи поступившие на рецензирование", отображает все статьи поступившие от авторов
 */
class AllArticlesComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            articles: [],
            isModalOpen: false, // признак активности модального окна "Выбор рецензента"
            selectedArticle: {}, // статья на которой нажали "Выбрать рецензента"
        }
    }
    /**
     *  фильтр для статьи ожидающей выбора рецензента
     */
    PendingReviewerSelectionFilter = {id: 39, text: "Ожидают выбора рецензента", isChecked: true};

    filterName = "filter-radio";
    filterData = [  {id: "all", text: {ru: "Все статьи", en: "All articles"}},
                    this.PendingReviewerSelectionFilter,
                    {id: 16, text: "Находятся на рецензировании"},
                    {id: 20, text: "Отправлены на доработку"},
                    {id: 25, text: "Ожидают повторного рецензирования"},
                    {id: 18, text: {ru: "Приняты", en: "Accepted аrticles"}},
                    {id: 15, text: {ru: "Отклонены", en: "Rejected articles"}}
                 ];

    componentDidMount() {
        if (!checkAccessibility(["ADD_PRIVILEGE"]))
            window.location.href="/";

        this.getArticles();
    }

    getArticles() {
        // ApiService.getAllArticles(localStorage.getItem("userId"))
        // .then((response) => {
    //         if (response.data.length > 0) {
    //             this.setState({articles: response.data.reverse()})
    //         }
        // })
        ApiService.getArticles(localStorage.getItem("userId"))
        .then((response) => {
            console.log(response);
            if (response.data.length > 0) {
                this.setState({articles: response.data.reverse()})
            }
        })
    }

    modalOpenToggle = (item) => {
		if (item) {
			this.setState({selectedArticle: item})
			this.setState({isModalOpen: true});
		} else {
			this.setState({isModalOpen: false});
		}
	}
    
    render() {
        return(
            <div className="window profile">
                <h2 className="sub-title window__title"><TranslatableText 
                    text={{
                    ru: "Статьи поступившие на рецензирование",
                    en: "Received articles for review",
                    }}/>
                </h2>

                {this.state.isModalOpen &&
					<ChooseReviewerComponent close={this.modalOpenToggle} article={this.state.selectedArticle}/>
				}

                <ArticlesComponent data={this.state.articles} filterData={this.filterData} filterName={this.filterName} renderButton={
                    (item) => (
                        <React.Fragment>
                            {item.articleId === this.PendingReviewerSelectionFilter.id &&
                                <button className="articles-container__button-edit-status button" id={item.articleId} onClick={(e) => this.modalOpenToggle(item)}>Выбрать рецензента</button>
                            }
                        </React.Fragment> 
                    )
					}
				/>
            </div>
        )
    }
}

export default AllArticlesComponent;