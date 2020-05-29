import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputFileComponent from './service/InputFileComponent';
import checkLog from "../service/checkLog";
import getGetRequest from '../service/getGetRequest';
import isEmptyObject from '../service/isEmptyObject';
import TranslatableText from "./service/TranslatableText";

class AddArticle2Component extends Component {
	constructor(props){
		super(props);

		this.articleId = getGetRequest();

		this.state ={
			 isSend: false,
			 filePath: '',
			 items: [],
			 isEdited: null,
		}
		this.data = []; // массив с добавляемыми файлами [{2: {описание файла: File}}, {3: {описание файла: File}}] -- (File - объект в котором сам файл)
		this.dataGet = {}; // объект в котором хранятся названия полученных файлов {0: "договор", 1: "тест на антиплагиат"}
		this.window = React.createRef();
		checkLog();
	}

	componentDidMount() {
		ApiService.getArticle(this.articleId)
			.then((response) => {
				console.log(response);
				let data = response.data.pathsMap;
				if ((data) && (!isEmptyObject(data))) {
					this.setState({isEdited: true}) // data
					let temp = this.state.items;
					let count = 0;
					for (let i in data) {
						temp.push(count);
						this.dataGet[count] = i;
						count++;
					}
					this.setState({items: temp});
				} else {
					this.setState({isEdited: false})
					let temp = this.state.items;
					temp.push(0);
					this.setState({items: temp});
				}
			})
	}

	send = (e) =>  {
		e.preventDefault();
		this.window.current.classList.add("load");

		let data = new FormData();
		for (let i of this.data) {
			for (let j in i) {
				console.log(j);
				console.log(i[j]);
				console.log("-------");
				data.append(j, i[j]);
			}
		}

		ApiService.addArticle2(data, this.articleId)
			.then((res) => {
				console.log(res)
				this.setState({isSend: true});
			})
	} 

	handleChange = (id, description, file) => {
		this.data[id] = {[description]: file}
		// console.log(this.data);
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
			this.data.splice(id, 1);
			this.setState({items: temp});
			this.dataGet[id] = undefined;
		}
	}
  
	render() {
		return(
			<div className="add-article window">
				{this.state.isSend === false &&
					<div ref={this.window}>
						{this.state.isEdited &&
							<h2 className="sub-title add-article__title window__title"><TranslatableText 
								text={{
								ru: "Редактирование статьи (шаг 2)",
								en: "Edit article (step 2)",
								}}/>
							</h2>
						}
						{this.state.isEdited === false &&
							<h2 className="sub-title add-article__title window__title"><TranslatableText 
								text={{
								ru: "Добавление статьи (шаг 2)",
								en: "Add article (step 2)",
								}}/>
							</h2>
						}
						
						{this.state.isEdited !== null && // чтоб не прыгало туда сюда (для красоты)
							<form onSubmit={this.send} encType="multipart/form-data" className="add-article__form">

								{this.state.items.map((item, number) => 
									<div className="add-article__section" key={item}>
										<InputFileComponent id={item} default={this.dataGet[item]} handleChange={this.handleChange} close={() => this.closeInput(number)}/>
										{/* <div>{item}</div> */}
									</div>
								)}
								
								<div className="add-article__button-more button-more" onClick={this.addFile}>
									<div className="button-more__button">+</div>
									<span className="button-more__description"><TranslatableText 
										text={{
										ru: "Добавить еще один файл",
										en: "Add more file",
										}}/>
									</span>	
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