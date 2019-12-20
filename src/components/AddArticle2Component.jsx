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
			 message: null,
			 isSend: false,
		}
		this.sendDescription = this.sendDescription.bind(this);
	}

	sendFile= async e =>  {
		e.preventDefault();
		var formData = new FormData();
		var file = document.querySelector('#file1');
		formData.append("file1", file.files[0]);
		console.log(file.files[0]);
		this.sendSuccess();
		const responce = await axios.post(url, formData, {
			headers: {
			'Content-Type': 'multipart/form-data'
			}
		})
		console.log("resp " + responce);	
		// this.setState({isSend: true});

	} 

	sendSuccess() {
		this.setState({isSend: true});
		localStorage.removeItem("keys");
		localStorage.removeItem("log");
		localStorage.removeItem("annotation");
		localStorage.removeItem("runningHead");
		localStorage.removeItem("articleName");
	}

	sendDescription = (e) => {
			e.preventDefault();
			let description = {};
			for (let i in this.state) {    
				if ((this.state[i] !== "") && (i !== "message") && (i !== "isSend")) {
					description[i] = this.state[i]
				}
			};
			console.log(description);
			ApiService.addFileDescription(description)
				.then(res => {
					this.setState({message : 'article add.'});
					this.props.history.push('/article');
				});
				
			this.sendFile(e);
	}

	handleChange = (e) => {
			this.setState({ [e.target.id]: e.target.value });
	}
  
	render() {
		return(
			<div className="add-article registration"> {/*временно добавил registration*/}
				{this.state.isSend === false &&
					<div>
					<h2 className="sub-title add-article__title registration__title">Добавление статьи (шаг 2)</h2>
					
					<form onSubmit={this.sendDescription}>
							<div className="add-article__section">		
								<div className="add-article__description">
									<input type="name" id="file1Description" className="login-container__input" maxLength="100" onChange={this.handleChange} required/>
									<label htmlFor="file1Description" className="login-container__label">Описание файла</label>
								</div>
								
								<input type="file" id="file1"></input>
							</div>
							
							<a href="/addArticle/step1" className="add-article__link" type="submit">Вернуться на предыдущий шаг</a>
							<button className="button registration__button" type="submit">Отправить на проверку</button>
					</form>
					</div>
				}
				{this.state.isSend === true &&
					<div>
						<h2 className="sub-title add-article__title registration__title">Статья отправлена!</h2>
						<p className="confirm__text">Статья находится на проверке, Загрузить её можно <a href="#" download>здесь</a></p>
					</div>
				}
				
			</div>
		)
	}
}

export default AddArticle1Component;