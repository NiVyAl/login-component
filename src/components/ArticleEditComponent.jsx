import React, { Component } from 'react';
import InputComponent from "../components/InputComponent";
import InputFileComponent from './InputFileComponent';
import SelectInputComponent from "../components/SelectInputComponent";

class ArticleEditComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countFiles: 1,
            items: [0],
        }
        
        this.status = ["needEdit", "ok"];
        this.statusNames = ["Отправить на доработку", "Одобрить"];
    }

    addFile = () => {
		this.state.items.push(this.state.items.length);
		this.setState({countFiles: this.state.countFiles + 1});
		console.log(this.state.countFiles);
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    
    render() {
        return(
            <div ref={this.container} className="modal-window article-edit">
                <div onClick={this.close} className="modal-window__background"></div>
                <form className="modal-window__window article-edit__window" onSubmit={this.handleSubmit} ref={this.window}>
                    <p className="modal-window__title sub-title">Изменить статус</p>
                    
                    <div className="article-edit__content">
                        <InputComponent text="Комментарий" name="comment" handleChange={this.handleChange} type="name" maxLength="100" required/>
                        <SelectInputComponent title="Статус:" id="role" change={this.handleChange} values={this.status} texts={this.statusNames}/>
                    
                        {this.state.items.map(item => 
                            <div className="add-article__section" key={item}>
                                <InputFileComponent id={item} handleChange={this.handleChange}/>
                            </div>
                        )}
                                    
                        <div className="add-article__button-more button-more" onClick={this.addFile}>
                            <div className="button-more__button">+</div>
                            <span className="button-more__description">Добавить файл</span>	
                        </div>
                    </div>
                    
                    <button type="submit" className="button">Отправить</button>
                </form>
            </div>
        )
    }
}

export default ArticleEditComponent;