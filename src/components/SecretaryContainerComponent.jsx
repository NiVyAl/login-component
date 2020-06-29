import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import TranslatableText from "./service/TranslatableText";
import ArticlesComponent from './ArticlesComponent';
import ChooseReviewerComponent from "./ChooseReviewerComponent.jsx";

class SecretaryContainerComponent extends Component { 
	constructor(props){
		super(props);
		
		this.state ={
			open: false,
			scrollY: 0,
			articles: false,
            data: false,
            isModalOpen: false,
		}

		this.filterData = [{id: "all", text: {ru: "Ожидают выбора рецензента", en: "All articles"}, isChecked: true}, {id: 16, text: "Отправлены на рецензию"}, {id: 25, text: "Ожидают повторного рецензирования"}, {id: 18, text: "Ожидают исправлений от автора"}, {id: 15, text: "Отклонены"}, {id: 23, text: "Приняты"}];
		this.filterName = "filter-radio";
	}
	
	componentDidMount() {
		ApiService.getArticles(localStorage.getItem("userId")) // временно УБРАТЬ!!!
			.then((response) => {
				console.log(response);
				if (response.data.length > 0) {
					this.setState({articles: response.data.reverse()})
				}
            })                              // УБРАТЬ
        
        // ApiService.getAllArticles(localStorage.getItem("userId")) // РАЗКОММЕНТИРОВАТЬ
        // .then((response) => {
        //         console.log(response)
        //         if (response.data.length > 0) {
        //             this.setState({articles: response.data.reverse()})
        //         }
        // })														// РАЗКОММЕНТИРОВАТЬ
    }
    
    modalOpenToggle = (item) => {
		if (item) {
			this.setState({articleName: item.articleName})
			this.setState({isModalOpen: true});
		} else {
			console.log("Закрыть");
			this.setState({isModalOpen: false});
		}
		
	}
	
	render() {
		return(
			<div className="articles-container">
				<h2 className="articles-container__main-title"><TranslatableText 
                    text={{
                    ru: "Все статьи:",
                    en: "All articles:",
                    }}/>
				</h2>
				{this.state.isModalOpen &&
					<ChooseReviewerComponent close={this.modalOpenToggle} title={this.state.articleName}/>
				}
				<ArticlesComponent data={this.state.articles} filterData={this.filterData} filterName={this.filterName} renderButton={
                        (item) => (
							<button className="articles-container__button-edit-status button" id={item.articleId} onClick={(e) => this.modalOpenToggle(item)}>Выбрать рецензента</button>	
						)
					}
				/>
			</div>
		)
	}
}

export default SecretaryContainerComponent;