import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import ArticleComponent from "./service/ArticleComponent";
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
				{this.state.articles &&
					<ArticlesComponent data={this.state.articles}/>
				}

				{!this.state.articles &&
					<p className="articles-container__no-articles">Здесь пока ничего нет...</p>
				}
			</div>
		)
	}
}

export default WriterContainerComponent;