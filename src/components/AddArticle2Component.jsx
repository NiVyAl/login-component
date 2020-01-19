import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputFileComponent from './InputFileComponent';

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
		let formDatas = {};
		let descriptions = {};
		let inputFiles = document.querySelectorAll(".input-file__input");
		for (let i in this.state) { // заполняем descriptions
			if ((i !== "isSend") && (i !== "filePath") && (i !== "countFiles") && (i !== "items")) {
				descriptions[i] = this.state[i];
			}
		}
		for (let i = 0; i < inputFiles.length; i++) {
			formDatas[`file${i}`] = new FormData();
			formDatas[`file${i}`].append("file", inputFiles[i].files[0]);
			// console.log(inputFiles[i].files[0]);
		}
		let articleId = {id: localStorage.getItem("articleId")};

		const data = new Map()
		data.set("articleId", localStorage.getItem("articleId"));
		for (let i = 0; i < inputFiles.length; i++) {
			data.set(descriptions[`file${i}Description`], formDatas[`file${i}`]);
			console.log(formDatas[`file${i}`].get("file"));
		}
		// const data = Object.assign(articleId, descriptions, formDatas);

		console.log(data);
		ApiService.addArticle2(data)
			.then((res) => {
				console.log(res)
				this.setState({isSend: true});
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
						
						<form onSubmit={this.send} encType="multipart/form-data">
								{this.state.items.map(item => 
									<div className="add-article__section" key={item}>
										<InputFileComponent id={item} handleChange={this.handleChange}/>
									</div>
								)}
								
								<div className="add-article__button-more" onClick={this.addFile}>добавить еще файл</div>
								
								<a href="/addArticle/step1" className="add-article__link" type="submit">Вернуться на предыдущий шаг</a>
								<button className="button window__button" type="submit">Отправить на проверку</button>
						</form>
					</div>
				}
				{this.state.isSend === true &&
					<div>
						<h2 className="sub-title add-article__title registration__title">Статья отправлена!</h2>
						<p className="confirm__text">Статья находится на проверке, Загрузить её можно <a href={this.state.filePath} download>здесь</a></p>
					</div>
				}
				
			</div>
		)
	}
}

export default AddArticle2Component;