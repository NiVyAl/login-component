import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputComponent from "../components/service/InputComponent";
import SelectInputComponent from "../components/service/SelectInputComponent";
import TextAreaComponent from "../components/service/TextAreaComponent";
import checkLog from "../service/checkLog";
import getGetRequest from "../service/getGetRequest";
import TranslatableText from "./service/TranslatableText";
import FormControlComponent from "../components/service/FormControlComponent";

class AddArticle1Component extends Component {
	constructor(props){
		super(props);
		
		this.selectData = [{id: "02.00.00", text: "Химия (02.00.00)"}, {id: "05.17.00", text: "Химическая технология (05.17.00)"}, {id: "05.13.00", text: "Информатика, вычислительная техника и управление (05.13.00)"}];
		// this.selectText = ["Химия (02.00.00)", "Химическая технология (05.17.00)", "Информатика, вычислительная техника и управление (05.13.00)" ];
		// this.subjectDefault = 0;

		this.state ={
			// subject: this.selectData[0], //устанавливаю subject по умолчанию (Химия 02.00.00)

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

  getArticle(articleId) { // берет данные статьи (при изменении статьи)
	this.setState({isEdited: articleId})
	ApiService.getArticle(articleId)
		.then((response) => {
			// console.log(response);
			this.setState({articleData: response.data})
			this.setState({isStartRender: true})
		})
  }

  sendArticle = (data) => {
	data.id = localStorage.getItem("userId");
	console.log(data);
	this.window.current.classList.add("load");
	ApiService.addArticle1(data)
	.then(res => {
		if (res.data.articleId) {
			window.location.href=`/addArticle/step2?articleId=${res.data.articleId}`;
		} 
	});  
  }
  
	render() {
		return(
			<div className="add-article window" ref={this.window}>
				{this.state.isEdited &&
					<h2 className="sub-title add-article__title window__title"><TranslatableText 
						text={{
						ru: "Редактирование статьи (шаг 1)",
						en: "Edit article (step 1)",
						}}/>
					</h2>
				}
				{!this.state.isEdited &&
					<h2 className="sub-title add-article__title window__title"><TranslatableText 
						text={{
						ru: "Добавление статьи (шаг 1)",
						en: "Add article (step 1)",
						}}/>
					</h2>
				}
				
				{this.state.isStartRender &&
					<FormControlComponent onSubmit={data => this.sendArticle(data)} render={
                        handleChange => (
                            <React.Fragment>
								<InputComponent text={{ru: "Название", en: "Article name"}} name="articleName" handleChange={handleChange} type="text" maxLength="250" noPostValue={this.state.articleData.articleName} required/>
								<InputComponent text={{ru: "Тип", en: "type"}} name="type" handleChange={handleChange} type="text" maxLength="100" noPostValue={this.state.articleData.type}/>
								<InputComponent text="Running Head" name="runningHead" handleChange={handleChange} type="text" maxLength="250" noPostValue={this.state.articleData.runningHead}/>
								{!this.state.isEdited &&
									<InputComponent text={{ru: "Авторы", en: "Authors"}} name="authors" handleChange={handleChange} type="text" maxLength="250" value={localStorage.getItem("log")}/>
								}
								{this.state.isEdited &&
									<InputComponent text={{ru: "Авторы", en: "Authors"}} name="authors" handleChange={handleChange} type="text" maxLength="250" noPostValue={this.state.articleData.authors}/>
								}
								<TextAreaComponent handleChange={handleChange} text={{ru: "Ключевые слова", en: "Keywords"}} name="keys" noPostValue={this.state.articleData.keys}/>
								<TextAreaComponent handleChange={handleChange} text={{ru: "Аннотация", en: "Annotation"}} name="annotation" noPostValue={this.state.articleData.annotation}/>
								<SelectInputComponent title="Раздел журнала" id="subject" handleChange={handleChange} data={this.selectData}/>  

								{this.state.isEdited &&
									<a href={`/addArticle/step2?articleId=${this.state.isEdited}`} className="add-article__link text-button" type="submit">Продолжить без сохранения изменений</a>
								}
								<button className="button window__button" type="submit"><TranslatableText 
									text={{
									ru: "Сохранить и продолжить",
									en: "Save and continue",
									}}/>
								</button>
							</React.Fragment>
						)
					}/>
				}
				
			</div>
		)
	}
}

export default AddArticle1Component;