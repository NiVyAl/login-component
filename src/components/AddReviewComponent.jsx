import React, { Component } from 'react';
import TextAreaComponent from "../components/service/TextAreaComponent";
import SelectInputComponent from "../components/service/SelectInputComponent";
import ApiService from "../service/ApiService";
import getGetRequest from "../service/getGetRequest";
import FormControlComponent from "../components/service/FormControlComponent";
import checkAccessibility from '../service/checkAccessibility';
import ErrorPopupComponent from './service/ErrorPopupComponent';
import TranslatableText from "./service/TranslatableText";

/**
 * Страница добавления рецензии на статью.
 */
class AddReviewComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }

        this.selectSubject = ApiService.ArticlesCategories;
        this.selectQ1 = [{id: "true", text: "Да"}, {id: "false", text: "Нет"}]
        this.selectQ2 = [{id: "true", text: "Да"}, {id: "false", text: "Нет"}]
        this.selectQ3 = [{id: "true", text: "Да"}, {id: "false", text: "Нет"}]
        this.selectQ4 = [{id: "true", text: "Да"}, {id: "false", text: "Нет"}]
        this.selectQ5 = [{id: "true", text: "Да"}, {id: "false", text: "Нет"}]
        this.selectRecommendation = [   {id: "0", text: "рекомендовать к публикации в представленном виде, без внесения изменений"}, 
                                        {id: "1", text: "рекомендовать к публикации с небольшими изменениями в тексте статьи"}, 
                                        {id: "2", text: "рекомендовать к публикации после внесения в текст статьи значительных изменений и повторного рецензирования"}, 
                                        {id: "3", text: "отклонить в связи с неудовлетворительным научным содержанием статьи"}, 
                                        {id: "4", text: "отклонить в связи с несоответствием тематики либо содержания статьи всем указанным выше профильным тематическим направлениям Журнала"}, 
                                        {id: "5", text: "отклонить после повторного рецензирования"}
                                    ];

        this.container = React.createRef();
    }
    
    componentDidMount() {
        if (!checkAccessibility(["REVIEW_PRIVILEGE"]))
            window.location.href="/";

        ApiService.getArticle(getGetRequest())
            .then((response) => {
                this.setState({articleName: response.data.articleName})
            })
    }
    
    sendForm = (data) => {
        console.log(data);
        data.userId = localStorage.getItem("userId");
        data.articleId = getGetRequest();
        this.container.current.classList.add("load");
        ApiService.addReview(data)
            .then(res => {
                console.log(res);
                this.setState({isSend: true});
            })
            .catch((err) => {
                if (err.response && err.response.status === 401)
                    ApiService.logOut();
                else 
                    this.setState({ showErrorPopup: true });
            })
            .finally(() => {
                this.container.current.classList.remove("load");
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
            <div className="window add-review" ref={this.container}>
                <h2 className="window__title sub-title">Заключение рецензента о возможности публикации статьи</h2>
                <p className="add-review__articleName">{this.state.articleName}</p>
                {this.state.isSend &&
                    <p className="sub-title">Рецензия отправлена!</p>
                }
                
                {!this.state.isSend &&
                    <FormControlComponent onSubmit={data => this.sendForm(data)} render={
                        handleChange => (
                            <React.Fragment>
                                <SelectInputComponent title="Направление журнала, под который, по мнению рецензента, подпадает статья" id="subject" handleChange={handleChange} data={this.selectSubject}/>
                                <SelectInputComponent title="Соответствует ли тематика статьи профилю паспорта научной специальности?" id="q1" handleChange={handleChange} data={this.selectQ1}/>
                                <SelectInputComponent title="Убеждает ли рецензента данная статья в достоверности представленных в ней результатов?" id="q2" handleChange={handleChange} data={this.selectQ2}/>
                                <SelectInputComponent title="Содержит ли аннотация статьи конкретное изложение основных результатов, которые в ней представлены?" id="q3" handleChange={handleChange} data={this.selectQ3}/>
                                <SelectInputComponent title="Достаточно ли ясно изложен материал статьи ее авторами?" id="q4" handleChange={handleChange} data={this.selectQ4}/>
                                <SelectInputComponent title="Достаточно ли хорошо оформлена статья с чисто технической точки зрения и соответствует ли ее оформление нормативам журнала в полном их объеме?" id="q5" handleChange={handleChange} data={this.selectQ5}/>
                                <SelectInputComponent title="Рекомендация рецензента" id="recommendation" handleChange={handleChange} data={this.selectRecommendation}/>
                                <TextAreaComponent handleChange={handleChange} text="Комментарий" name="comment" required/>
                                <button type="submit" className="button" onClick={this.send}>Отправить</button>
                            </React.Fragment>
                        )
                    }/>
                }
                <ErrorPopupComponent isOpen={this.state.showErrorPopup} onClose={this.handleClosePopup} />
            </div>
        )
    }
}

export default AddReviewComponent;