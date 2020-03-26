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

		this.state ={
			id: localStorage.getItem("userId"),
			subject: this.inputData[0], //subject по умолчанию (Химия 02.00.00)

			articleData: {
				articleName: "",
			},
		}

		this.window = React.createRef();
		checkLog();
  }

  componentDidMount() {
	const articleId = getGetRequest(); 
	if (articleId) {  // новая статья или редактируемая
		this.setState({isEdited: true})
		ApiService.getArticle(articleId)
			.then((response) => {
				console.log(response);
				this.setState({articleData: response.data})
				// console.log(this.state.aticleData.articleName);
			})
	}
  }

  sendArticle = (e) => {
		e.preventDefault();
		this.window.current.classList.add("load");
		console.log(this.state);
		ApiService.addArticle1(this.state)
		.then(res => {
			if (res.data.articleId) {
				// localStorage.setItem("articleId", res.data.articleId);
				window.location.href=`/addArticle/step2?articleId=${res.data.articleId}`;
			} 
			// window.location.href="/addArticle/step2";
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
				
				<form onSubmit={this.sendArticle}>
					<InputComponent text="Название" name="articleName" handleChange={this.handleChange} type="text" maxLength="250" value={this.state.articleData.articleName} required/>
					{/* {console.log(this.state.articleData.articleName)} */}
					<InputComponent text="Тип" name="type" handleChange={this.handleChange} type="text" maxLength="100"/>
					<InputComponent text="Running Head" name="runningHead" handleChange={this.handleChange} type="text" maxLength="250"/>
					<InputComponent text="Авторы" name="authors" handleChange={this.handleChange} type="text" maxLength="250" value={localStorage.getItem("log")}/>
					<TextAreaComponent handleChange={this.handleChange} text="Ключевые слова" name="keys"/>
					<TextAreaComponent handleChange={this.handleChange} text="Аннотация" name="annotation"/>
					<SelectInputComponent title="Раздел журнала" id="subject" change={this.handleChange} values={this.inputData} texts={this.inputText}/>  

					<button className="button window__button" type="submit">Сохранить и продолжить</button>
				</form>
				
			</div>
		)
	}
}

export default AddArticle1Component;