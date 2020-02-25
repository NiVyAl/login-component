import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import ArticleComponent from "./service/ArticleComponent";
import ChooseReviewerComponent from "./ChooseReviewerComponent.jsx";

class ArticlesReviewContainerComponent extends Component {
	constructor(props){
		super(props);
		
		this.state ={ 
			articles: {},
			isResponse: false,
			buttons: [],
			isModalOpen: false,
		}
	}
	
	componentDidMount() {
		ApiService.getAllArticles(localStorage.getItem("userId"))
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
			if (i == e.target.id) {
				if (this.state[i]) {
					e.target.innerHTML = "Больше информации";
				} else {
					e.target.innerHTML = "Меньше информации";
				}
				this.setState({[i]: !this.state[i]})
			}
		}
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
				{this.state.isModalOpen &&
					<ChooseReviewerComponent close={this.modalOpenToggle} title={this.state.articleName}/>
				}
				<h2 className="articles-container__title">Статьи ожидающие рецензии:</h2>
				{!this.state.isResponse &&
					<p className="articles-container__no-articles">Здесь пока ничего нет...</p>
				}
				{this.state.isResponse &&
					<ul className="articles-container__list">
						{this.state.articles.map(item => 
							<li className="articles-container__item" key={item.articleId}>
								<ArticleComponent item={item} isOpen={this.state[item.articleId + "btnMore"]}/>
								<p className="articles-container__text-button text-button" id={item.articleId + "btnMore"} onClick={this.openMore}>Больше информации</p>
								<button className="articles-container__button-edit-status button" id={item.articleId} onClick={(e) => this.modalOpenToggle(item)}>Выбрать рецензента</button>
							</li>
						)}
					</ul>
				}
			</div>
		)
	}
}

export default ArticlesReviewContainerComponent;