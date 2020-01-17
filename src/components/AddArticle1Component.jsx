import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import sendInput from "../service/sendInput";
import InputComponent from "../components/InputComponent";

class AddArticle1Component extends Component {
	constructor(props){
		super(props);
		this.window = React.createRef();
  }
  
  send = (e) => {
	  e.preventDefault();
	  console.log(sendInput.data);
	  this.window.current.classList.add("load");
	  console.log(this.window);
	  ApiService.addArticle1(sendInput.data)
		.then(res => {
			console.log(res);
			if (res.data.id) {
				localStorage.setItem("articleId", res.data.id);
			} 
			window.location.href="/addArticle/step2";
		});
  }
  
	render() {
		return(
			<div className="add-article window" ref={this.window}>
				<h2 className="sub-title add-article__title window__title">Добавление статьи (шаг 1)</h2>
				
				<form onSubmit={this.send}>
					<InputComponent text="Название" name="articleName" handleChange={sendInput.handleChange} type="text" maxLength="100" required/>
					<InputComponent text="Тип" name="type" handleChange={sendInput.handleChange} type="text" maxLength="100"/>
					<InputComponent text="Running Head" name="runningHead" handleChange={sendInput.handleChange} type="text" maxLength="100"/>
					<InputComponent text="Аннотация" name="annotation" handleChange={sendInput.handleChange} type="text" maxLength="100"/>
					<InputComponent text="Ключевые слова" name="keys" handleChange={sendInput.handleChange} type="text" maxLength="100"/>
					<InputComponent text="Авторы" name="authors" handleChange={sendInput.handleChange} type="text" maxLength="100"/>

					<button className="button window__button" type="submit">Сохранить и продолжить</button>
				</form>
				
			</div>
		)
	}
}

export default AddArticle1Component;