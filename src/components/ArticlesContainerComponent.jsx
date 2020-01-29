import React, { Component } from 'react';
import ApiService from "../service/ApiService";

class ArticlesContainerComponent extends Component {
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
						this.setState({[i.articleId]: false})
					}	
			})
	}
	
	open = (e) => {
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
		// ApiService.getArticle(e.target.id)
		// 	.then((response) => {
		// 		console.log("getArticle");
		// 		console.log(response);
		// 	})
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
				<h2 className="articles-container__title">Ваши статьи:</h2>
				{!this.state.isResponse &&
					<p className="articles-container__no-articles">Здесь пока ничего нет...</p>
				}
				{this.state.isResponse &&
					<ul className="articles-container__list">
						{this.state.articles.map(item => 
							<li className="articles-container__item" key={item.articleId}>
								<h3 className="articles-container__title">{item.articleName}</h3>
								{/* <p className="articles-container__status">Находится на проверке</p> */}
								<p className="articles-container__status"><span className="text-bold">Статус:</span> Не доделана (<a href={`/addArticle/step1?id=${item.articleId}`} className="link">продолжить создание</a>)</p>
								<a href="/" className="link articles-container__link" download>Скачать</a>
								
								{this.state[item.articleId] &&
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
								<button className="articles-container__button button" id={item.articleId} onClick={this.open}>Больше информации</button>
							</li>
						)}
					</ul>
				}
			</div>
		)
	}
}

export default ArticlesContainerComponent;