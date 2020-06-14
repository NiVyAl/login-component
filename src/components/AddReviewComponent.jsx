import React, { Component } from 'react';
import TextAreaComponent from "../components/service/TextAreaComponent";
import SelectInputComponent from "../components/service/SelectInputComponent";
import ApiService from "../service/ApiService";
import getGetRequest from "../service/getGetRequest";
import FormControlComponent from "../components/service/FormControlComponent";
import TranslatableText from "./service/TranslatableText";

class AddReviewComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }

        this.selectSubject = [{id: "02.00.00", text: "Химия (02.00.00)"}, {id: "05.17.00", text: "Химическая технология (05.17.00)"}, {id: "05.13.00", text: "Информатика, вычислительная техника и управление (05.13.00)"}];
        this.selectQ1 = [{id: "true", text: "Да"}, {id: "false", text: "Нет"}]
        this.selectQ2 = [{id: "true", text: "Да"}, {id: "false", text: "Нет"}]
        this.selectQ3 = [{id: "true", text: "Да"}, {id: "false", text: "Нет"}]
        this.selectQ4 = [{id: "true", text: "Да"}, {id: "false", text: "Нет"}]
        this.selectQ5 = [{id: "true", text: "Да"}, {id: "false", text: "Нет"}]
        this.selectRecommendation = [{id: "0", text: "рекомендовать к публикации в представленном виде, без внесения изменений"}, {id: "1", text: "рекомендовать к публикации с небольшими изменениями в тексте статьи"}, {id: "2", text: "рекомендовать к публикации после внесения в текст статьи значительных изменений и повторного рецензирования"}, {id: "3", text: "отклонить в связи с неудовлетворительным научным содержанием статьи"}, {id: "4", text: "отклонить в связи с несоответствием тематики либо содержания статьи всем указанным выше профильным тематическим направлениям Журнала"}, {id: "5", text: "отклонить после повторного рецензирования"}];
        
        // this.inputId = ["subject", "test0", "test1", "test2", "test3", "test4", "test5", "recommendation"]
        
        // this.inputData = {
        //     subject: ["02.00.00", "05.17.00", "05.19.00", "05.13.00", "03.02.00"],
        //     test0: [true, false],
        //     test1: [true, false],
        //     test2: [true, false],
        //     test3: [true, false],
        //     test4: [true, false],
        //     test5: [true, false],
        //     recommendation: [0, 1, 2, 3, 4, 5],
        // }
        
        // this.inputText = {
        //     subject: ["Химия (02.00.00)", "Химическая технология (05.17.00)", "Информатика, вычислительная техника и управление (05.13.00)" ],
        //     test0: ["Да", "Нет"],
        //     test1: ["Да", "Нет"],
        //     test2: ["Да", "Нет"],
        //     test3: ["Да", "Нет"],
        //     test4: ["Да", "Нет"],
        //     test5: ["Да", "Нет"],
        //     recommendation: [
        //         "рекомендовать к публикации в представленном виде, без внесения изменений",
        //         "рекомендовать к публикации с небольшими изменениями в тексте статьи", 
        //         "рекомендовать к публикации после внесения в текст статьи значительных изменений и повторного рецензирования", 
        //         "отклонить в связи с неудовлетворительным научным содержанием статьи", 
        //         "отклонить в связи с несоответствием тематики либо содержания статьи всем указанным выше профильным тематическим направлениям Журнала",
        //         "отклонить после повторного рецензирования"
        //     ],
        // }
        
        // this.inputTitle = {
        //     subject: "Направление журнала, под который, по мнению рецензента, подпадает статья:",
        //     test0: "Соответствует ли тематика статьи профилю паспорта научной специальности?",
        //     test1: "Представлены ли в статье оригинальные результаты, полученные лично ее авторами?",
        //     test2: "Убеждает ли рецензента данная статья в достоверности представленных в ней результатов?",
        //     test3: "Содержит ли аннотация статьи конкретное изложение основных результатов, которые в ней представлены?",
        //     test4: "Достаточно ли ясно изложен материал статьи ее авторами?",
        //     test5: "Достаточно ли хорошо оформлена статья с чисто технической точки зрения и соответствует ли ее оформление нормативам журнала в полном их объеме?",
        //     recommendation: "Рекомендация рецензента:",
        // }
    }
    
    componentDidMount() {
        // for (let i of this.inputId) {
        //     this.setState({ [i]: this.inputData[i][0] })
        // }

        // this.setState({id: getGetRequest()});
        
        ApiService.getArticle(getGetRequest())
            .then((response) => {
                this.setState({articleName: response.data.articleName})
            })
    }
    
    send = (data) => {
        console.log(data);
        this.container.current.classList.add("load");
        ApiService.addReview(data)
            .then(res => {
                console.log(res);
                this.setState({isSend: true});
            })
    }
    
    render() {
        return(
            <div className="window add-review">
                <h2 className="window__title sub-title">Заключение рецензента о возможности публикации статьи</h2>
                <p className="add-review__articleName">{this.state.articleName}</p>
                {this.state.isSend &&
                    <p className="">Рецензия отправлена!</p>
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
                                <SelectInputComponent title="Достаточно ли хорошо оформлена статья с чисто технической точки зрения и соответствует ли ее оформление нормативам журнала в полном их объеме?" id="q5" handleChange={handleChange} data={this.selectQ1}/>
                                <TextAreaComponent handleChange={handleChange} text="Комментарий" name="comment"/>
                                <button type="submit" className="button" onClick={this.send}>Отправить</button>
                            </React.Fragment>
                        )
                    }/>

                    // <form ref={this.container} onSubmit={this.handleSubmit}>
                    //     <div className="add-review__content">
                    //         {this.inputId.map(item => 
                    //             <SelectInputComponent title={this.inputTitle[item]} id={item} change={this.handleChange} values={this.inputData[item]} texts={this.inputText[item]} key={item}/>    
                    //         )}
                    //     </div>
                    //     {/* <InputComponent text="Комментарий" name="comment" handleChange={this.handleChange} type="text" maxLength="256"/> */}
                    //     <TextAreaComponent handleChange={this.handleChange} text="Комментарий" name="comment"/>
                        
                    //     <button type="submit" className="button" onClick={this.send}>Отправить</button>
                    // </form>
                }
            </div>
        )
    }
}

export default AddReviewComponent;