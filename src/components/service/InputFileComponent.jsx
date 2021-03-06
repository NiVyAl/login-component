import React, { Component } from 'react';
import InputComponent from "../service/InputComponent";
import translateText from '../../service/translateText';
import TranslatableText from "./TranslatableText";

/**
 * Компонент для отправки файлов
 */
class InputFileComponent extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			fileChange: false,
		}
		this.buttonText = React.createRef();
	}

	componentDidMount() {
		this.setDefaultValue()
	}

	setDefaultValue() {
		if (this.props.default) {
			this.buttonText.current.innerHTML = translateText({ru: "Загрузить новый файл", en: "Download new file"});
		}
	}

	handleChange = (e) => {
		if(!e.target.value) {
			this.buttonText.current.innerHTML = translateText({ru: "Выберите файл...", en: "Choose file..."});
		} else {
			this.buttonText.current.innerHTML = e.target.files[0].name;
			this.setState({fileChange: e.target.files[0]});
			if ((this.state.inputText) || (this.props.default)) {
				this.props.handleChange(this.props.id, this.state.inputText, e.target.files[0])
			}
		}
	}

	textHandleChange = (name, value) => {
		this.setState({inputText: value});
		if (this.state.fileChange) {
			this.props.handleChange(this.props.id, value, this.state.fileChange)
		}
	}
	
	render() {
		return(
			<div className="input-file">
				<div className="input-file__description">
					{!this.props.default &&
						<InputComponent text={{ru: "Описание файла", en: "File description"}} name={`file${this.props.id}Description`} handleChange={this.textHandleChange} type="text" maxLength="250" value={this.props.default} required/>
					}

					{this.props.default &&
						<InputComponent text={{ru: "Описание файла", en: "File description"}} name={`file${this.props.id}Description`} handleChange={this.textHandleChange} type="text" maxLength="250" value={this.props.default} readonly/>
					}
					<button type="button" className="input-file__button-close button-close" onClick={this.props.close}>Закрыть</button>
				</div>

				{!this.props.default &&
					<input onChange={this.handleChange} className="input-file__input" type="file" id={this.props.id} required></input>
				}

				{this.props.default &&
					<input onChange={this.handleChange} className="input-file__input" type="file" id={this.props.id}></input>
				}
				
				<label htmlFor={this.props.id} className="input-file__button file-button">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
					<span ref={this.buttonText} className="file-button__text"><TranslatableText text={{ru: "Выберите файл...", en: "Choose file..."}}/></span>
				</label>
			</div>
		)
	}
}

export default InputFileComponent;