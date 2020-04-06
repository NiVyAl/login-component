import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputComponent from "../components/service/InputComponent";
import SelectInputComponent from "../components/service/SelectInputComponent";
import TextAreaComponent from "../components/service/TextAreaComponent";
import checkLog from "../service/checkLog";
import getGetRequest from "../service/getGetRequest";

class AddArticle1Component extends Component {
	constructor(props){
		super(props);
		
		this.inputData = ["02.00.00", "05.17.00", "05.13.00"];
		this.inputText = ["Химия (02.00.00)", "Химическая технология (05.17.00)", "Информатика, вычислительная техника и управление (05.13.00)" ];
		this.subjectDefault = 0;

		this.state ={
			id: localStorage.getItem("userId"),
			subject: this.inputData[0], //устанавливаю subject по умолчанию (Химия 02.00.00)

			articleData: {
				articleName: "",
				runningHead: "",
				annotation: "",
				type: "",
				keys: "",
				authors: "",
			},
		}

		this.window = React.createRef();
		checkLog();
  }

  componentDidMount() {
	const articleId = getGetRequest(); 
	if (articleId) {  // новая статья или редактируемая
		this.getArticle(articleId); // получаем статью (Редактирование статьи)
	} else {
		this.setState({isStartRender: true})
	}
  }

  getArticle(articleId) { 
	this.setState({isEdited: articleId})
	ApiService.getArticle(articleId)
		.then((response) => {
			// console.log(response);
			this.setState({articleData: response.data})
			this.setState({isStartRender: true})
		})
  }

  sendArticle = (e) => {
	e.preventDefault();
	this.window.current.classList.add("load");
	// console.log(this.state);
	let data = {};
	for (let i in this.state) {
		if ((i != "articleData") && (i != "isStartRender") && (i != "isEdited")) {
			data[i] = this.state[i];
		}
	}
	console.log(data);
	ApiService.addArticle1(data)
	.then(res => {
		if (res.data.articleId) {
			window.location.href=`/addArticle/step2?articleId=${res.data.articleId}`;
		} 
	});  
		
  }

  handleChange = (e) => {
	this.setState({ [e.target.id]: e.target.value });
  }
  
	render() {
		return(
			<div className="add-article window" ref={this.window}>
				{this.state.isEdited &&
					<h2 className="sub-title add-article__title window__title">Редактирование статьи (шаг 1)</h2>
				}
				{!this.state.isEdited &&
					<h2 className="sub-title add-article__title window__title">Добавление статьи (шаг 1)</h2>
				}
				
				{this.state.isStartRender &&
					<form onSubmit={this.sendArticle}>
						<InputComponent text="Название" name="articleName" handleChange={this.handleChange} type="text" maxLength="250" noPostValue={this.state.articleData.articleName} required/>
						{/* {console.log(this.state.articleData.articleName)} */}
						<InputComponent text="Тип" name="type" handleChange={this.handleChange} type="text" maxLength="100" noPostValue={this.state.articleData.type}/>
						<InputComponent text="Running Head" name="runningHead" handleChange={this.handleChange} type="text" maxLength="250" noPostValue={this.state.articleData.runningHead}/>
						{!this.state.isEdited &&
							<InputComponent text="Авторы" name="authors" handleChange={this.handleChange} type="text" maxLength="250" value={localStorage.getItem("log")}/>
						}
						{this.state.isEdited &&
							<InputComponent text="Авторы" name="authors" handleChange={this.handleChange} type="text" maxLength="250" noPostValue={this.state.articleData.authors}/>
						}
						<TextAreaComponent handleChange={this.handleChange} text="Ключевые слова" name="keys" noPostValue={this.state.articleData.keys}/>
						<TextAreaComponent handleChange={this.handleChange} text="Аннотация" name="annotation" noPostValue={this.state.articleData.annotation}/>
						<SelectInputComponent title="Раздел журнала" id="subject" change={this.handleChange} values={this.inputData} texts={this.inputText} default={this.subjectDefault}/>  

						{this.state.isEdited &&
							<a href={`/addArticle/step2?articleId=${this.state.isEdited}`} className="add-article__link text-button" type="submit">Продолжить без сохранения изменений</a>
						}
						<button className="button window__button" type="submit">Сохранить и продолжить</button>
					</form>
				}
				
			</div>
		)
	}
}

export default AddArticle1Component;