import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputComponent from "../components/InputComponent";
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
	}

	send = (e) =>  {
		e.preventDefault();
		var formData = new FormData();
		var file = document.querySelector('#file1');
		formData.append(this.state.file1Description, file.files[0]);
		console.log(file.files[0]);
		ApiService.addArticle2()
			.then((res) => {
				console.log(res)
			})
		
		// const responce = axios.post("http://localhost:4000/article/saveFile", formData, {
		// 	headers: {
		// 		id: localStorage.getItem("articleId")
		// 	}
		// })
		// console.log(responce);	
		// this.setState({isSend: true});
		// if (responce.status === 200) {
		// 	this.sendSuccess();
		// 	this.setState({filePath: responce.data})
		// }	

	} 

	// // sendSuccess() {
	// // 	this.setState({isSend: true});
	// // 	localStorage.removeItem("keys");
	// // 	localStorage.removeItem("log");
	// // 	localStorage.removeItem("annotation");
	// // 	localStorage.removeItem("runningHead");
	// // 	localStorage.removeItem("articleName");
	// // }

	// sendDescription = (e) => {
	// 		// e.preventDefault();
	// 		// let description = {};
	// 		// for (let i in this.state) {    
	// 		// 	if ((this.state[i] !== "") && (i !== "message") && (i !== "isSend")) {
	// 		// 		description[i] = this.state[i]
	// 		// 	}
	// 		// };
	// 		// console.log(description);
	// 		// ApiService.addFileDescription(description)
	// 		// 	.then(res => {
	// 		// 		this.setState({message : 'article add.'});
	// 		// 		this.props.history.push('/article');
	// 		// 	});
				
	// 		this.sendFile(e); // после отправки описания отправляется файл
	// }

	handleChange = (e) => {
			this.setState({ [e.target.id]: e.target.value });
	}
	
	addFile = () => {
		// console.log(typeof this.state.countFiles);
		// this.setState({countFiles: this.state.countFiles.push(this.state.countFiles.length)})
		// console.log(this.state.countFiles);
		this.state.items.push(this.state.items.length);
		this.setState({countFiles: this.state.countFiles + 1});
		console.log(this.state.countFiles);
	}
  
	render() {
		return(
			<div className="add-article window">
				{this.state.isSend === false &&
					<div>
						<h2 className="sub-title add-article__title window__title">Добавление статьи (шаг 2)</h2>
						
						<form onSubmit={this.send} encType="multipart/form-data">
								{this.state.items.map(item => 
									<div className="add-article__section" key={item}>
										<InputFileComponent id={item}/>
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