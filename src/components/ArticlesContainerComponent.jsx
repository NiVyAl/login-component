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
					this.setState({articles: response.data})
					this.setState({isResponse: true});
					
					for (let i of response.data) {
						this.setState({[i.articleId]: false})
					}
					
					// console.log(response.data.reverte())
						
			})
	}
	
	// open = (e) => {
	// 	if (this.state.buttons.length === 0) {
	// 		this.setState({buttons: document.querySelectorAll(".articles-container__button")})
	// 	}
		
	// 	if (e.target.id === this.state.open) { //если нажали на меньше информации (скрывается)
	// 		this.setState({open: false});
	// 		e.target.innerHTML = "Больше информации";
	// 		window.scroll(this.state.scrollY, 0);
	// 	} else { // если нажали на больше информации (раскрывается)
	// 		this.setState({open: e.target.id});	
	// 		this.setState({scrollY: window.pageYOffset})
	// 		for (let i = 0; i < this.state.buttons.length; i++) {
	// 			this.state.buttons[i].innerHTML = "Больше информации";
	// 		}
	// 		e.target.innerHTML = "Меньше информации";
	// 	}
	// }
	open = (e) => {
		for (let i in this.state) {
			// console.log(i);
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
		console.log(data)
		// console.log(fileMap);
		// for (let i of fileMap) {
		// 	console.log(i);
		// }
		// return(
		// 	<div>addFile</div>
		// )
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
								<p className="articles-container__status"><span className="text-bold">Статус:</span> Не доделана (<a href="/" className="link">продолжить создание</a>)</p>
								<a href="/" className="link articles-container__link" download>Скачать</a>
								{/* {console.log(item.pathsMap)} */}
								{/* {this.writeFiles(item.pathsMap)} */}
								{/* {item.pathsMap.forEach( (value, key) => 
									<div>{value + key}</div>
								)} */}
								{/* {item.pathsMap.map( (value, key) => 
									<div>{value + key}</div>
								)} */}
								{this.state[item.articleId] &&
									<ul className="more-list articles-container__more-list">
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
											{/* {item.pathsMap.map(i =>
												<li className="more-list__item">
													<p className="more-list__title">Проверка на антиплагиат:</p>
													<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
												</li>
											)} */}
											{this.writeFiles(item.pathsMap)}
											
											<li className="more-list__item">
												<p className="more-list__title">Проверка на антиплагиат:</p>
												<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
											</li>
											
											<li className="more-list__item">
												<p className="more-list__title">еще какой-то файл:</p>
												<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
											</li>
											
											<li className="more-list__item">
												<p className="more-list__title">pdf файл самой статьи:</p>
												<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
											</li>
											
											<li className="more-list__item">
												<p className="more-list__title">третий файл самой статьи:</p>
												<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
											</li>
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