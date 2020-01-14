import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import sendInput from "../service/sendInput";
import InputComponent from "../components/InputComponent";

class AddArticle1Component extends Component {
	constructor(props){
		super(props);
		this.state ={
			//  articleName: '',
			//  runningHead: '',
			//  annotation: '',
			//  keys: '',
		}
		// this.sendArticle = this.sendArticle.bind(this);
		this.window = React.createRef();
  }
  
//   componentDidMount() {
// 		for (var i in this.state) {
// 			if (localStorage.getItem(i)) {
// 				document.getElementById(i).value = localStorage.getItem(i);
// 			}
// 		}	  
//   }  
  send = async (e) => {
	  let res = await sendInput.submit(e);
	  console.log(res);
  }

  sendArticle = (e) => {
		e.preventDefault();
		this.window.current.classList.add("load");
		console.log(this.state.data);
		ApiService.addArticle1(this.state.data)
		.then(res => {
			if (res.data.id) {
				localStorage.setItem("articleId", res.data.id);
			} 
			window.location.href="/addArticle/step2";
		});  
		
  }

  handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
		// localStorage.setItem(e.target.id, e.target.value); // кидаем данные каждой формы в localStorage
  }
  
	render() {
		return(
			<div className="add-article window" ref={this.window}>
				<h2 className="sub-title add-article__title window__title">Добавление статьи (шаг 1)</h2>
				
				<form onSubmit={this.send}>
					<InputComponent text="Название" name="articleName" handleChange={sendInput.handleChange} type="text" maxLength="100" required/>
					<InputComponent text="Тип" name="type" handleChange={sendInput.handleChange} type="text" maxLength="100"/>
					<InputComponent text="Running Head" name="runningHead" handleChange={this.handleChange} type="text" maxLength="100"/>
					<InputComponent text="Аннотация" name="annotation" handleChange={this.handleChange} type="text" maxLength="100"/>
					<InputComponent text="Ключевые слова" name="keys" handleChange={this.handleChange} type="text" maxLength="100"/>
					<InputComponent text="Авторы" name="authors" handleChange={this.handleChange} type="text" maxLength="100"/>

					<button className="button window__button" type="submit">Сохранить и продолжить</button>
				</form>
				
			</div>
		)
	}
}

export default AddArticle1Component;