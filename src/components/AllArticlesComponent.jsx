import React, { Component } from 'react';
import checkAccessibility from '../service/checkAccessibility';
import TranslatableText from './service/TranslatableText';
import ArticlesComponent from './ArticlesComponent';
import {Link} from 'react-router-dom';
import ApiService from "../service/ApiService";
import ChooseReviewerComponent from "./ChooseReviewerComponent.jsx";
import ErrorPopupComponent from './service/ErrorPopupComponent';

/**
 * Страница "Статьи поступившие на рецензирование", отображает все статьи поступившие от авторов (страница для секретаря)
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
    PendingReviewerSelectionFilter = {id: "WAITING_REVIEWER", text: "Ожидают выбора рецензента", isChecked: true};

    FilterName = "filter-radio";
    FilterData = [  {id: "all", text: {ru: "Все статьи", en: "All articles"}},
                    this.PendingReviewerSelectionFilter,
                    {id: "PROCESSING", text: "Находятся на рецензировании"},
                    {id: "APPROVED", text: {ru: "Приняты", en: "Accepted аrticles"}},
                    {id: "REJECTED", text: {ru: "Отклонены", en: "Rejected articles"}}
                 ];

    componentDidMount() {
        if (!checkAccessibility(["ADD_PRIVILEGE"]))
            window.location.href="/";

        this.getArticles();
    }

    getArticles() {
        ApiService.getAllArticles(localStorage.getItem("userId"))
        .then((response) => {
            if (response.data.length > 0) {
                this.setState({articles: response.data.reverse()})
            }
        })
        .catch((err) => {
            if (err.response && err.response.status === 401)
                ApiService.logOut();
            else 
                this.setState({ showErrorPopup: true });
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
                    ru: "Статьи поступившие на рецензирование",
                    en: "Received articles for review",
                    }}/>
                </h2>

                {this.state.isModalOpen &&
					<ChooseReviewerComponent close={this.modalOpenToggle} article={this.state.selectedArticle}/>
				}

                <ArticlesComponent data={this.state.articles} filterData={this.FilterData} filterName={this.FilterName} renderButton={
                    (item) => (
                        <React.Fragment>
                            {item.verdict === this.PendingReviewerSelectionFilter.id &&
                                <button className="articles-container__button-edit-status button" id={item.articleId} onClick={(e) => this.modalOpenToggle(item)}>Выбрать рецензента</button>
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

export default AllArticlesComponent;