import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import TranslatableText from "./service/TranslatableText";
import ArticlesComponent from './ArticlesComponent';

class WriterContainerComponent extends Component { 
	constructor(props){
		super(props);
		
		this.state ={
			open: false,
			scrollY: 0,
			articles: false,
			data: false,
		}

		this.filterData = [{id: "all", text: {ru: "Все статьи", en: "All articles"}, isChecked: true}, {id: 16, text: "Отправлены на проверку"}, {id: 25, text: "Требуют доработки"}, {id: 18, text: "Приняты"}, {id: 15, text: "Отклонены"}];
		this.filterName = "filter-radio";
	}
	
	componentDidMount() {
		ApiService.getArticles(localStorage.getItem("userId"))
			.then((response) => {
					if (response.data.length > 0) {
						this.setState({articles: response.data.reverse()})
					}
			})
	}
	
	render() {
		return(
			<div className="articles-container">
				<h2 className="articles-container__main-title"><TranslatableText 
                    text={{
                    ru: "Ваши статьи:",
                    en: "Your articles:",
                    }}/>
				</h2>
				<ArticlesComponent data={this.state.articles} filterData={this.filterData} filterName={this.filterName} renderButton={
                        (item) => (
							<a href={`/addArticle/step1?articleId=${item.articleId}`} className="articles-container__button-edit-status button" id={item.articleId}><TranslatableText 
								text={{
								ru: "Редактировать",
								en: "Edit article",
								}}/>
							</a>	
						)
					}
				/>
			</div>
		)
	}
}

export default WriterContainerComponent;