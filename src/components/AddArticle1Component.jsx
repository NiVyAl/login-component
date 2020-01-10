import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputComponent from "../components/InputComponent";

class AddArticle1Component extends Component {
	constructor(props){
		super(props);
		this.state ={
			 articleName: '',
			 runningHead: '',
			 annotation: '',
			 keys: '',
		}
		this.sendArticle = this.sendArticle.bind(this);
  }
  
  componentDidMount() {
		for (var i in this.state) {
			if (localStorage.getItem(i)) {
				document.getElementById(i).value = localStorage.getItem(i);
			}
		}	  
  }

  sendArticle = (e) => {
		e.preventDefault();
		let article1 = {};
		for (let i in this.state) {    
			if ((this.state[i] !== "")) {
				article1[i] = this.state[i]
			}
		
		};
		
		ApiService.addArticle1(article1)
			.then(res => {
				if (res.id) {
					localStorage.setItem("articleId", res.id);
				} 
				window.location.href="/addArticle/step2";
			});  
  }

  handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
		localStorage.setItem(e.target.id, e.target.value); // кидаем данные каждую форму в localStorage
  }
  
	render() {
		return(
			<div className="add-article window">
				<h2 className="sub-title add-article__title window__title">Добавление статьи (шаг 1)</h2>
				
				<form onSubmit={this.sendArticle}>
					<InputComponent text="Название" name="articleName" handleChange={this.handleChange} type="text" maxLength="100" required/>
					<InputComponent text="Running Head" name="runningHead" handleChange={this.handleChange} type="text" maxLength="100" required/>
					<InputComponent text="Аннотация" name="annotation" handleChange={this.handleChange} type="text" maxLength="100" required/>
					<InputComponent text="Ключевые слова" name="keys" handleChange={this.handleChange} type="text" maxLength="100" required/>

					<button className="button window__button" type="submit">Сохранить и продолжить</button>
            </form>
				
			</div>
		)
	}
}

export default AddArticle1Component;