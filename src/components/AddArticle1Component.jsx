import React, { Component } from 'react';
import ApiService from "../service/ApiService";

class AddArticle1Component extends Component {
	constructor(props){
		super(props);
		this.state ={
			 articleName: '',
			 runningHead: '',
			 annotation: '',
			 keys: '',
			 message: null
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
		let user = {};
		for (let i in this.state) {    
			 if ((this.state[i] !== "") && (i !== "message")) {
				  user[i] = this.state[i]
			 }
		};
		console.log(user);
		ApiService.addUser(user)
			 .then(res => {
				  this.setState({message : 'article add.'});
				  this.props.history.push('/article');
				  window.location.href="/addArticle/step2";
			 });  
  }

  handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
		localStorage.setItem(e.target.id, e.target.value);
  }
  
	render() {
		return(
			<div className="add-article registration"> {/*временно добавил registration*/}
				<h2 className="sub-title add-article__title registration__title">Добавление статьи (шаг 1)</h2>
				
				<form onSubmit={this.sendArticle}>
                    <input type="text" id="articleName" className="login-container__input" maxLength="100" onChange={this.handleChange} required/>
                    <label htmlFor="articleName" className="login-container__label">Название</label>

                    <input type="name" id="runningHead" className="login-container__input" maxLength="100" onChange={this.handleChange} required/>
                    <label htmlFor="runningHead" className="login-container__label">Running Head </label>

                    <input type="name" id="annotation" className="login-container__input" maxLength="100" onChange={this.handleChange} required/>
                    <label htmlFor="annotation" className="login-container__label">Аннотация</label>
						  
						  <input type="name" id="keys" className="login-container__input" maxLength="100" onChange={this.handleChange} required/>
                    <label htmlFor="keys" className="login-container__label">Ключевые слова</label>

                	  <button className="button registration__button" type="submit">Сохранить и продолжить</button>
            </form>
				
			</div>
		)
	}
}

export default AddArticle1Component;