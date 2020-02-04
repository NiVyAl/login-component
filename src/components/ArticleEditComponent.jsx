import React, { Component } from 'react';
import InputComponent from "../components/InputComponent";
import InputFileComponent from './InputFileComponent';
import SelectInputComponent from "../components/SelectInputComponent";

class ArticleEditComponent extends Component {
    constructor(props) {
        super(props);
        
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
            test2: "Убеждает ли рецензента данная статья в достоверности представленных в ней результатов?	+	",
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
    }
    
    send = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.container.current.classList.add("load");
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    
    render() {
        return(
            <div className="window article-edit">
                <form ref={this.container} onSubmit={this.handleSubmit}>
                    <p className="modal-window__title sub-title">Изменить статус {this.props.articleId}</p>
                    
                    <div className="article-edit__content">
                        {this.inputId.map(item => 
                            <SelectInputComponent title={this.inputTitle[item]} id={item} change={this.handleChange} values={this.inputData[item]} texts={this.inputText[item]} key={item}/>    
                        )}
                    </div>
                    
                    <button type="submit" className="button" onClick={this.send}>Отправить</button>
                </form>
            </div>
        )
    }
}

export default ArticleEditComponent;