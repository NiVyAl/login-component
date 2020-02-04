import React, { Component } from 'react';
import InputComponent from "../components/InputComponent";
import InputFileComponent from './InputFileComponent';
import SelectInputComponent from "../components/SelectInputComponent";
import ApiService from "../service/ApiService";

class ArticleEditComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }
        
        this.inputId = ["subject", "test0", "test1", "test2", "test3", "test4", "test5", "recommendation"]
        
        this.inputData = {
            subject: ["02.00.00", "05.17.00", "05.19.00", "05.13.00", "03.02.00"],
            test0: [true, false],
            test1: [true, false],
            test2: [true, false],
            test3: [true, false],
            test4: [true, false],
            test5: [true, false],
            recommendation: [1, 2, 3, 4, 5, 6],
        }
        
        this.inputText = {
            subject: ["Химия (02.00.00)", "Химическая технология (05.17.00)", "Технология материалов текстильной и легкой промышленности (05.19.00)", "Информатика, вычислительная техника и управление (05.13.00)", "Общая биология (03.02.00)" ],
            test0: ["Да", "Нет"],
            test1: ["Да", "Нет"],
            test2: ["Да", "Нет"],
            test3: ["Да", "Нет"],
            test4: ["Да", "Нет"],
            test5: ["Да", "Нет"],
            recommendation: [
                "рекомендовать к публикации в представленном виде, без внесения изменений",
                "рекомендовать к публикации с небольшими изменениями в тексте статьи", 
                "рекомендовать к публикации после внесения в текст статьи значительных изменений и повторного рецензирования", 
                "отклонить в связи с неудовлетворительным научным содержанием статьи", 
                "отклонить в связи с несоответствием тематики либо содержания статьи всем указанным выше профильным тематическим направлениям Журнала",
                "отклонить после повторного рецензирования"
            ],
        }
        
        this.inputTitle = {
            subject: "Направление журнала, под который, по мнению рецензента, подпадает статья:",
            test0: "Соответствует ли тематика статьи профилю паспорта научной специальности?",
            test1: "Представлены ли в статье оригинальные результаты, полученные лично ее авторами?",
            test2: "Убеждает ли рецензента данная статья в достоверности представленных в ней результатов?",
            test3: "Содержит ли аннотация статьи конкретное изложение основных результатов, которые в ней представлены?",
            test4: "Достаточно ли ясно изложен материал статьи ее авторами?",
            test5: "Достаточно ли хорошо оформлена статья с чисто технической точки зрения и соответствует ли ее оформление нормативам журнала в полном их объеме?",
            recommendation: "Рекомендация рецензента:",
        }
        
        this.container = React.createRef();
    }
    
    componentDidMount() {
        for (let i of this.inputId) {
            this.setState({ [i]: this.inputData[i][0] })
        }
        let id = this.getId();
        this.setState({id: id});
        
        ApiService.getArticle(id)
            .then((response) => {
                this.setState({articleName: response.data.articleName})
            })
    }
    
    send = (e) => {
        e.preventDefault();
        let data = {};
        for (const i in this.state) {
            if (this.state[i] !== "articleName") {
                data[i] = this.state[i];
            }
        }
        console.log(data);
        this.container.current.classList.add("load");
        ApiService.addReview(data)
            .then(res => {
                console.log(res);
                this.setState({isSend: true});
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    
    getId = () => {
        let url = window.location.href;
        let id = "";
        for (let i = 0; i < url.length; i++) {
            if (url[i] === "=") {
                id = url.slice(i+1, url.length);
                break
            }
        }
        return id
    }
    
    render() {
        return(
            <div className="window article-edit">
                <h2 className="window__title sub-title">Заключение рецензента о возможности публикации статьи</h2>
                <p className="article-edit__articleName">{this.state.articleName}</p>
                {this.state.isSend &&
                    <p className="">Рецензия отправлена!</p>
                }
                
                {!this.state.isSend &&
                    <form ref={this.container} onSubmit={this.handleSubmit}>
                        <div className="article-edit__content">
                            {this.inputId.map(item => 
                                <SelectInputComponent title={this.inputTitle[item]} id={item} change={this.handleChange} values={this.inputData[item]} texts={this.inputText[item]} key={item}/>    
                            )}
                        </div>
                        
                        <button type="submit" className="button" onClick={this.send}>Отправить</button>
                    </form>
                }
            </div>
        )
    }
}

export default ArticleEditComponent;