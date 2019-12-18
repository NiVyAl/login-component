import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import axios, { post } from 'axios';
import url from '../url.js'

class AddArticle1Component extends Component {
	constructor(props){
		super(props);
		this.state ={
			 articleName: '',
			 runningHead: '',
			 message: null
		}
		this.saveUser = this.saveUser.bind(this);
	}

	sendFile(e) {
		e.preventDefault();
		var formData = new FormData();
		var file = document.querySelector('#file1');
		formData.append("file1", file);
		console.log(file);
		axios.post(url, formData, {
			headers: {
			'Content-Type': 'multipart/form-data'
			}
		})
	} 

	saveUser = (e) => {
			e.preventDefault();
			// let user = {email: this.state.email, password: this.state.password, nameR: this.state.nameR, surnameR: this.state.surnameR, middleNameR: this.state.middleNameR, name: this.state.name, surname: this.state.surname, country: this.state.country, university: this.state.university,};
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
				});
	}

	handleChange = (e) => {
			this.setState({ [e.target.id]: e.target.value });
	}
  
	render() {
		return(
			<div className="add-article registration"> {/*временно добавил registration*/}
				<h2 className="sub-title add-article__title registration__title">Добавление статьи (шаг 2)</h2>
				
				<form onSubmit={this.sendFile}>
                    {/* <input type="file" id="articleName" className="login-container__input" maxLength="100" onChange={this.handleChange} required/>
                    <label htmlFor="articleName" className="login-container__label">Название</label>

                    <input type="name" id="runningHead" className="login-container__input" maxLength="100" onChange={this.handleChange} required/>
                    <label htmlFor="runningHead" className="login-container__label">Running Head </label>

                    <input type="name" id="middleNameR" className="login-container__input" maxLength="100" onChange={this.handleChange} required/>
                    <label htmlFor="middleNameR" className="login-container__label">Аннотация</label>
						  
						  <input type="name" id="middleNameR" className="login-container__input" maxLength="100" onChange={this.handleChange} required/>
                    <label htmlFor="middleNameR" className="login-container__label">Ключевые слова</label>
							 */}
						<div className="add-article__section">
							<input type="file" id="file1" onChange="this.handleChange"></input>
							<div className="add-article__description">
								<input type="name" id="file1Description" className="login-container__input" maxLength="100" onChange={this.handleChange} required/>
								<label htmlFor="file1Description" className="login-container__label">Описание файла</label>
							</div>
						</div>
						   
						<a href="/addArticle/step1" className="add-article__link" type="submit">Вернуться на предыдущий шаг</a>
						<button className="button registration__button" type="submit">Отправить на проверку</button>
            </form>
				
			</div>
		)
	}
}

export default AddArticle1Component;