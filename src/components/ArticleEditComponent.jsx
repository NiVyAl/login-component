import React, { Component } from 'react';
import InputComponent from "../components/InputComponent";
import InputFileComponent from './InputFileComponent';

class ArticleEditComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countFiles: 1,
            items: [0],
        }
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
                <form className="modal-window__window" onSubmit={this.handleSubmit} ref={this.window}>

                <InputComponent text="Комментарий" name="comment" handleChange={this.handleChange} type="name" maxLength="100" required/>

                    {this.state.items.map(item => 
                        <div className="add-article__section" key={item}>
                            <InputFileComponent id={item} handleChange={this.handleChange}/>
                        </div>
					)}
								
                    <div className="add-article__button-more button-more" onClick={this.addFile}>
                        <div className="button-more__button">+</div>
                        <span className="button-more__description">Добавить файл</span>	
                    </div>
                </form>
            </div>
        )
    }
}

export default ArticleEditComponent;