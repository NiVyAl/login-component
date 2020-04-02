import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputFileComponent from './service/InputFileComponent';
import checkLog from "../service/checkLog";
import getGetRequest from '../service/getGetRequest';

class AddArticle2Component extends Component {
	constructor(props){
		super(props);

		this.articleId = getGetRequest();

		this.state ={
			 isSend: false,
			 filePath: '',
			 items: [0],
			 isEdited: null,
		}
		this.data = {};
		this.window = React.createRef();
		checkLog();
	}

	componentDidMount() {
		ApiService.getArticle(this.articleId)
			.then((response) => {
				console.log(response);
				if (response.data.pathsMap) {
					this.setState({isEdited: response.data.pathsMap})
				} else {
					this.setState({isEdited: false})
				}
			})
	}

	send = (e) =>  {
		e.preventDefault();
		this.window.current.classList.add("load");
		let descriptions = {};
		const inputFiles = document.querySelectorAll(".input-file__input");
		
		for (let i in this.state) { // заполняем descriptions
			if ((i !== "isSend") && (i !== "filePath") && (i !== "items") && (i !== "isEdited")) {
				descriptions[i] = this.state[i];
			}
		}

		let data = new FormData();
		for (let i = 0; i < inputFiles.length; i++) {
			console.log(descriptions[`file${i}Description`]);
			console.log(inputFiles[i].files[0])
			console.log("------");
			data.append(descriptions[`file${i}Description`], inputFiles[i].files[0]);
		}

		// ApiService.addArticle2(data, this.articleId)
		// 	.then((res) => {
		// 		console.log(res)
		// 		this.setState({isSend: true});
		// 	})
	} 

	handleChange = (description, file) => {
		// this.setState({ [e.target.id]: e.target.value });
		// console.log(description);
		// console.log(file);
		// console.log("---------");
		this.data[description] = file;
		console.log(this.data);
	}
	
	addFile = () => {
		let temp = this.state.items;
		temp.push(temp[temp.length-1]+1);
		this.setState({items: temp});
	}

	closeInput = (id) => {
		let temp = this.state.items;
		if (temp.length > 1) {
			temp.splice(id, 1);
			this.setState({items: temp});
		}
		
	}
  
	render() {
		return(
			<div className="add-article window">
				{this.state.isSend === false &&
					<div ref={this.window}>
						{this.state.isEdited &&
							<h2 className="sub-title add-article__title window__title">Редактирование статьи (шаг 2)</h2>
						}
						{this.state.isEdited === false &&
							<h2 className="sub-title add-article__title window__title">Добавление статьи (шаг 2)</h2>
						}
						
						{this.state.isEdited !== null && // чтоб не прыгало туда сюда (для красоты)
							<form onSubmit={this.send} encType="multipart/form-data" className="add-article__form">
								
								{/* {this.state.isEdited &&
									<div>
										{this.state.isEdited.map((item) =>
											<div>{item}</div>
										)}
									</div>
								} */}

								{this.state.items.map((item, number) => 
									<div className="add-article__section" key={item}>
										<InputFileComponent id={item} handleChange={this.handleChange} close={() => this.closeInput(number)}/>
									</div>
								)}
								
								<div className="add-article__button-more button-more" onClick={this.addFile}>
									<div className="button-more__button">+</div>
									<span className="button-more__description">Добавить файл</span>	
								</div>
								
								<a href={`/addArticle/step1?articleId=${this.articleId}`} className="add-article__link text-button" type="submit">Вернуться на предыдущий шаг</a>
								<button className="button window__button" type="submit">Отправить на проверку</button>
							</form>
						}
					</div>
				}
				{this.state.isSend === true &&
					<div>
						<h2 className="sub-title add-article__title registration__title">Статья отправлена!</h2>
						<p className="confirm__text">Статья загружена, посмотреть ее статус можно <a href="/profile">здесь</a></p>
					</div>
				}
				
			</div>
		)
	}
}

export default AddArticle2Component;