import React, { Component } from 'react';
import ClosePopupComponent from './ClosePopupComponent';

//<SelectInputComponent title="Раздел журнала" id="subject" handleChange={handleChange} data={this.selectData}/>  
//selectData = [{id: "02.00.00", text: "Химия (02.00.00)", isChecked/noPostCheck: true}, {id: "05.17.00", text: "Химическая технология (05.17.00)"}, {id: "05.13.00", text: "Информатика, вычислительная техника и управление (05.13.00)"}];
//						isChecked - выбор по умолчанию отправляемый на сервер        noPostCheck - чисто визуальновыбран

class SelectInputComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}

		this.title = React.createRef();
		this.container = React.createRef();
		this.chosenText = React.createRef();

		this.isChosen = false
	}

	componentDidMount() {
		this.setDefaultCheck();
		if (this.props.isRequired) {
			
		}
	}

	setDefaultCheck() {
		let defaultCheckedId;
        for (let i of this.props.data) {
            if (i.isChecked === true) {
                defaultCheckedId = i.id;
                this.setState({defaultCheckedId: defaultCheckedId});
			}
		}

        if (defaultCheckedId) {
			this.props.handleChange(this.props.id, defaultCheckedId);
		}
	}

	openList = () => {
		console.log("open")
		this.container.current.classList.add("select-input--active");
		this.title.current.classList.add("select-input__title--active");
		this.setState({isOpen: true});
	}

	closeList = () => {
		this.container.current.classList.remove("select-input--active");

		if (!this.isChosen) {
			this.title.current.classList.remove("select-input__title--active");
		}
	}

	chooseItem = (e, name, id, chosenText) => {
		this.props.handleChange(name, id);
		this.setState({isOpen: false});
		this.setState({chosenId: id});
		this.isChosen = true
		this.closeList();
		this.chosenText.current.innerHTML = chosenText;
	}

	close = (chosenId) => {
		// console.log(chosenId);
		// console.log(this.state.chosenId);
		if (chosenId === this.state.chosenId) {
			this.closeList();
		}
	}
	
	render() {
		return(
			<div className="select-input select-input" ref={this.container}>
				<ClosePopupComponent close={this.closeList} isOpen={this.state.isOpen}/>
				<p ref={this.title} onClick={this.openList} className="select-input__title select-input__title">
					<span className="select-input__title-text">{this.props.title}</span>
					<span ref={this.chosenText} className="select-input__chosen-text"></span>
				</p>
				<div className="select-input__list">
					{this.props.data.map((item) => 
						<div className="select-input__item" key={item.id}>
							{(item.isChecked === true || item.noPostCheck === true) &&
								<label>{item.text}<input className="select-input__input" type="radio" name={this.props.id} onChange={(e) => this.chooseItem(e, this.props.id, item.id, item.text)} defaultChecked/></label>
							}
							{(item.isChecked !== true && item.noPostCheck !== true) &&
								<label>{item.text}<input className="select-input__input" type="radio" name={this.props.id} onClick={(e) => this.close(item.id)} onChange={(e) => this.chooseItem(e, this.props.id, item.id, item.text)} required/></label>
							}
						</div>
					)}	
				</div>
			</div>
		)
	}
}

export default SelectInputComponent; 