import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import ArticleComponent from "./service/ArticleComponent";
import TranslatableText from "./service/TranslatableText";
import ArticlesComponent from './ArticlesComponent';

class ReviewerContainerComponent extends Component {
	constructor(props){
		super(props);
		
		this.state ={ 
			articles: false,
		}

		this.filterData = [{id: "all", text: {ru: "Все статьи", en: "All articles"}, isChecked: true}, {id: 16, text: "Ожидают рецензирования"}, {id: 25, text: "Ожидают повторного рецензирования"}, {id: 18, text: "Отправлены на доработку"}, {id: 15, text: "Отклонены"}, {id: 23, text: "Приняты"}];
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
			

		// ApiService.getReviewerArticles(localStorage.getItem("userId"))		// РАЗКОММЕНТИРОВАТЬ
		// 	.then((response) => {
		// 			console.log(response)
		// 			this.setState({articles: response.data.reverse()})
		// 			if (response.data.length > 0) {
		// 				this.setState({isResponse: true});
		// 			}	
					
		// 			for (let i of this.state.articles) {
		// 				this.setState({[i.articleId + "btnMore"]: false})
		// 			}	
		// 	})																	// РАЗКОММЕНТИРОВАТЬ
	}
	
	// openMore = (e) => {
	// 	for (let i in this.state) {
	// 		if (i === e.target.id) {
	// 			if (this.state[i]) {
	// 				e.target.innerHTML = "Больше информации";
	// 			} else {
	// 				e.target.innerHTML = "Меньше информации";
	// 			}
	// 			this.setState({[i]: !this.state[i]})
	// 		}
	// 	}
	// }
	
	// writeFiles(data) {
	// 	let files = [];
	// 	for (let i in data) {
	// 		files.push(i);
	// 	}
	// 	return(
	// 		<div>
	// 			{files.map(fileName => 
	// 				<li className="more-list__item" key={fileName}>
	// 					<p className="more-list__title">{fileName}</p>
	// 					<p className="more-list__content"><a href={data[fileName]} className="link" download>Скачать</a></p>
	// 				</li>		
	// 			)}
	// 		</div>
	// 	)
	// }
	
	render() {
		return(
			<div className="articles-container">
				<h2 className="articles-container__main-title">Статьи отправленные вам на рецензию:</h2>
				<ArticlesComponent data={this.state.articles} filterData={this.filterData} filterName={this.filterName} renderButton={
                        (item) => (
							<React.Fragment>
								{/* {item.articleStatus === "В процессе" && */}  {/*показывать кнопку только статьям ожидающим рецензии*/}
									<a href={`/addReview?id=${item.articleId}`} className="articles-container__button-edit-status button" id={item.articleId} >Добавить рецензию</a>	
								{/* } */}
							</React.Fragment>
						)
					}
				/>
				{/* {!this.state.isResponse &&
					<p className="articles-container__no-articles">Здесь пока ничего нет...</p>
				}
				{this.state.isResponse &&
					<ul className="articles-container__list">
						{this.state.articles.map(item => 
							<li className="articles-container__item" key={item.articleId}>
								<ArticleComponent item={item} isOpen={this.state[item.articleId + "btnMore"]}/>
								<p className="articles-container__text-button text-button" id={item.articleId + "btnMore"} onClick={this.openMore}>Больше информации</p>
								{item.articleStatus === "В процессе" &&
									<a href={`/addReview?id=${item.articleId}`} className="articles-container__button-edit-status button" id={item.articleId} >Добавить рецензию</a>
								}
								{item.articleStatus === "Одобрена" &&
									<p className="articles-container__button-edit-status button articles-container__button--succes" id={item.articleId}>Статья одобрена</p>
								}
								{item.articleStatus === "Доработка" &&
									<p className="articles-container__button-edit-status button articles-container__button--succes" id={item.articleId}>Отправлена на доработку</p>
								}
							</li>
						)}
					</ul>
				} */}
			</div>
		)
	}
}

export default ReviewerContainerComponent;