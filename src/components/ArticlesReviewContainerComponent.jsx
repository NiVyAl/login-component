import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import ArticleEditComponent from './ArticleEditComponent';

class ArticlesReviewContainerComponent extends Component {
	constructor(props){
		super(props);
		
		this.state ={
			open: false,
			scrollY: 0,
			articles: {},
			isResponse: false,
			isEditOpen: false,
			buttons: [],
			whichArticleOpen: "",
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
					e.target.innerHTML = "Больше информации"
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
	
	editOpenCloseToggle = (e, item) => {
		console.log(item.articleName);
		window.location.href=`/addReview?id=${e.target.id}`;
	}
	
	
	render() {
		return(
			<div className="articles-container">
				{/* {this.state.isEditOpen &&
					<ArticleEditComponent editClose={this.editOpenCloseToggle} articleId={this.state.whichArticleOpen} articleId={item.articleName}/>
				} */}
				<h2 className="articles-container__title">Статьи на проверку:</h2>
				{!this.state.isResponse &&
					<p className="articles-container__no-articles">Здесь пока ничего нет...</p>
				}
				{this.state.isResponse &&
					<ul className="articles-container__list">
						{this.state.articles.map(item => 
							<li className="articles-container__item" key={item.articleId}>
								{this.state.isEditOpen &&
									<ArticleEditComponent editClose={this.editOpenCloseToggle} articleId={this.state.whichArticleOpen} articleName={item.articleName}/>
								}
								<h3 className="articles-container__title">{item.articleName}</h3>
								{/* <p className="articles-container__status">Находится на проверке</p> */}
								{/* <p className="articles-container__status"><span className="text-bold">Статус:</span> Не доделана (<a href="/" className="link">продолжить создание</a>)</p> */}
								<p className="articles-container__status"><span className="text-bold">Статус:</span> {item.articleStatus}</p>
								<a href="/" className="link articles-container__link" download>Скачать</a>
								
								{this.state[item.articleId + "btnMore"] &&
									<ul className="more-list articles-container__more-list">
											<li className="more-list__item">
												<p className="more-list__title">Тип:</p>
												<p className="more-list__content">{item.type}</p>
											</li>
											<li className="more-list__item">
												<p className="more-list__title">Авторы:</p>
												<p className="more-list__content">{item.authors}</p>
											</li>
											<li className="more-list__item">
												<p className="more-list__title">Running Head:</p>
												<p className="more-list__content">{item.runningHead}</p>
											</li>
											
											<li className="more-list__item">
												<p className="more-list__title">Аннотация:</p>
												<p className="more-list__content">{item.annotation}</p>
											</li>
											
											<li className="more-list__item">
												<p className="more-list__title">Ключевые слова:</p>
												<p className="more-list__content">{item.keys}</p>
											</li>
											{this.writeFiles(item.pathsMap)}
									</ul>
								}
								<p className="articles-container__text-button text-button" id={item.articleId + "btnMore"} onClick={this.openMore}>Больше информации</p>
								<button className="articles-container__button-edit-status button" id={item.articleId} onClick={(e) => this.editOpenCloseToggle(e, item)}>Изменить статус</button>
							</li>
						)}
					</ul>
				}
			</div>
		)
	}
}

export default ArticlesReviewContainerComponent;