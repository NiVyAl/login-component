import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputComponent from "../components/service/InputComponent";
import SelectInputComponent from "../components/service/SelectInputComponent";
import TextAreaComponent from "../components/service/TextAreaComponent";
import checkLog from "../service/checkLog";
import getGetRequest from "../service/getGetRequest";
import TranslatableText from "./service/TranslatableText";
import FormControlComponent from "../components/service/FormControlComponent";
import {Link} from 'react-router-dom';
import checkAccessibility from '../service/checkAccessibility';
import ErrorPopupComponent from './service/ErrorPopupComponent';

/**
 * Класс добавления/изменения статьи (первый шаг)
 */
class AddArticle1Component extends Component {
	constructor(props){
		super(props);
		
		this.selectData = ApiService.ArticlesCategories;;

		this.state ={
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
		if (!checkAccessibility(["WRITE_PRIVILEGE"]))
				window.location.href="/";
		const articleId = getGetRequest(); //получаем get запрос (из адресной строки) если есть 
		if (articleId) {  // определяем новая статья или редактируемая
			this.getArticle(articleId); // получаем статью (Редактирование статьи)
		} else {
			this.setState({isStartRender: true})
		}
	}

	getArticle(articleId) { // берет данные статьи (при изменении статьи)
		this.setState({isEdited: articleId})
		ApiService.getArticle(articleId)
			.then((response) => {
				console.log(response);
				this.setState({articleData: response.data})
				this.state.articleData.subject = "05.17.00"; // УДАЛИТЬ!!!  костыль пока нет данных с сервера УДАЛИТЬ!!!
				this.setSelect(this.state.articleData.subject); // установить раздел журнала в котором статья

				this.setState({isStartRender: true})
			})
	}

	setSelect(selectId) {
		for (let i in this.selectData) {
			if (this.selectData[i].id === selectId) {
				this.selectData[i].noPostCheck = true;
			}
		}
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
		})
		.catch((err) => {
            if (err.response && err.response.status === 401)
                ApiService.logOut();
            else 
                this.setState({ showErrorPopup: true });
        })
		.finally(() => {
			this.window.current.classList.remove("load");
		})
	}

	/**
     * Метод закрытия модального окна ошибки
     */
     handleClosePopup = () => {
        this.setState({ showErrorPopup: false });
    }
  
	render() {
		return(
			<div className="add-article window" ref={this.window}>
				<h2 className="sub-title add-article__title window__title">
					{this.state.isEdited &&
						<TranslatableText 
							text={{
							ru: "Редактирование статьи (шаг 1)",
							en: "Edit article (step 1)",
						}}/>
					}
					{!this.state.isEdited &&
						<TranslatableText 
							text={{
							ru: "Добавление статьи (шаг 1)",
							en: "Add article (step 1)",
						}}/>
					}
				</h2>
				
				{this.state.isStartRender &&
					<FormControlComponent onSubmit={data => this.sendArticle(data)} render={
                        handleChange => (
                            <React.Fragment>
								<InputComponent text={{ru: "Название", en: "Article name"}} name="articleName" handleChange={handleChange} type="text" maxLength="250" noPostValue={this.state.articleData.articleName} required/>
								<InputComponent text={{ru: "Тип", en: "type"}} name="type" handleChange={handleChange} type="text" maxLength="100" noPostValue={this.state.articleData.type}/>
								<SelectInputComponent title="Раздел журнала" id="subject" handleChange={handleChange} data={this.selectData}/>  
								<InputComponent text="Running Head" name="runningHead" handleChange={handleChange} type="text" maxLength="250" noPostValue={this.state.articleData.runningHead}/>
								{!this.state.isEdited &&
									<InputComponent text={{ru: "Авторы", en: "Authors"}} name="authors" handleChange={handleChange} type="text" maxLength="250" value={localStorage.getItem("log")}/>
								}
								{this.state.isEdited &&
									<InputComponent text={{ru: "Авторы", en: "Authors"}} name="authors" handleChange={handleChange} type="text" maxLength="250" noPostValue={this.state.articleData.authors}/>
								}
								<TextAreaComponent handleChange={handleChange} text={{ru: "Ключевые слова", en: "Keywords"}} name="keys" noPostValue={this.state.articleData.keys}/>
								<TextAreaComponent handleChange={handleChange} text={{ru: "Аннотация", en: "Annotation"}} name="annotation" noPostValue={this.state.articleData.annotation}/>

								{this.state.isEdited &&
									<Link to={`/addArticle/step2?articleId=${this.state.isEdited}`} className="add-article__link text-button" type="submit">Продолжить без сохранения изменений</Link>
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
				<ErrorPopupComponent isOpen={this.state.showErrorPopup} onClose={this.handleClosePopup} />
			</div>
		)
	}
}

export default AddArticle1Component;