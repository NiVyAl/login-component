import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import ArticleComponent from "./service/ArticleComponent";

class WriterContainerComponent extends Component { 
	constructor(props){
		super(props);
		
		this.state ={
			open: false,
			scrollY: 0,
			articles: {},
			isResponse: false,
			buttons: [],
		}
	}
	
	componentDidMount() {
		ApiService.getArticles(localStorage.getItem("userId"))
			.then((response) => {
					console.log(response)
					this.setState({articles: response.data.reverse()})
					if (response.data.length > 0) {
						this.setState({isResponse: true});
					}
					
					for (let i of this.state.articles) {
						this.setState({[i.articleId + "btnMore"]: false})
					}
			})
	}
	
	openMore = (e) => {
		for (let i in this.state) {
			if (i === e.target.id) {
				if (this.state[i]) {
					e.target.innerHTML = "Больше информации";
				} else {
					e.target.innerHTML = "Меньше информации";
				}
				this.setState({[i]: !this.state[i]})
			}
		}
	}
	
	writeFiles(data) {
		let files = [];
		for (let i in data) {
			files.push(i);
		}
		return(
			<div>
				{files.map(fileName => 
					<li className="more-list__item" key={fileName}>
						<p className="more-list__title">{fileName}</p>
						<p className="more-list__content"><a href={data[fileName]} className="link" download>Скачать</a></p>
					</li>		
				)}
			</div>
		)
	}
	
	render() {
		return(
			<div className="articles-container">
				<h2 className="articles-container__main-title">Ваши статьи:</h2>
				{!this.state.isResponse &&
					<p className="articles-container__no-articles">Здесь пока ничего нет...</p>
				}
				{this.state.isResponse &&
					<ul className="articles-container__list">
						{this.state.articles.map(item =>
							<li className="articles-container__item" key={item.articleId}>
								<ArticleComponent item={item} isOpen={this.state[item.articleId + "btnMore"]}/>
								<p className="articles-container__text-button text-button" id={item.articleId + "btnMore"} onClick={this.openMore}>Больше информации</p>
								<a href={`/addArticle/step1?articleId=${item.articleId}`} className="articles-container__button-edit-status button" id={item.articleId}>Редактировать</a>
							</li>
						)}
					</ul>
				}
			</div>
		)
	}
}

export default WriterContainerComponent;