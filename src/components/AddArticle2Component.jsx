import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputFileComponent from './InputFileComponent';
import InputComponent from "../components/InputComponent";

class AddArticle2Component extends Component {
	constructor(props){
		super(props);
		this.state ={
			 isSend: false,
			 filePath: '',
			 countFiles: 1,
			 items: [0]
		}
		this.window = React.createRef();
	}

	send = (e) =>  {
		e.preventDefault();
		this.window.current.classList.add("load");
		let descriptions = {};
		let inputFiles = document.querySelectorAll(".input-file__input");
		
		for (let i in this.state) { // заполняем descriptions
			if ((i !== "isSend") && (i !== "filePath") && (i !== "countFiles") && (i !== "items")) {
				descriptions[i] = this.state[i];
			}
		}

		let data = new FormData();
		for (let i = 0; i < inputFiles.length; i++) {
			data.append(descriptions[`file${i}Description`], inputFiles[i].files[0])
		}
		
		console.log(data);
		ApiService.addArticle2(data, localStorage.getItem("articleId"))
			.then((res) => {
				console.log(res)
				this.setState({isSend: true});
				localStorage.removeItem("articleId");
			})
	} 

	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	}
	
	addFile = () => {
		this.state.items.push(this.state.items.length);
		this.setState({countFiles: this.state.countFiles + 1});
		console.log(this.state.countFiles);
	}
  
	render() {
		return(
			<div className="add-article window">
				{this.state.isSend === false &&
					<div ref={this.window}>
						<h2 className="sub-title add-article__title window__title">Добавление статьи (шаг 2)</h2>
						
						<form onSubmit={this.send} encType="multipart/form-data" className="add-article__form">
							
							{this.state.items.map(item => 
								<div className="add-article__section" key={item}>
									<InputFileComponent id={item} handleChange={this.handleChange}/>
								</div>
							)}
							
							<div className="add-article__button-more button-more" onClick={this.addFile}>
								<div className="button-more__button">+</div>
								<span className="button-more__description">Добавить файл</span>	
							</div>
							
							<a href="/addArticle/step1" className="add-article__link text-button" type="submit">Вернуться на предыдущий шаг</a>
							<button className="button window__button" type="submit">Отправить на проверку</button>
						</form>
					</div>
				}
				{this.state.isSend === true &&
					<div>
						<h2 className="sub-title add-article__title registration__title">Статья отправлена!</h2>
						{/* <p className="confirm__text">Статья находится на проверке, Загрузить её можно <a href={this.state.filePath} download>здесь</a></p> */}
						<p className="confirm__text">Статья загружена, посмотреть ее статус можно <a href="/profile">здесь</a></p>
					</div>
				}
				
			</div>
		)
	}
}

export default AddArticle2Component;