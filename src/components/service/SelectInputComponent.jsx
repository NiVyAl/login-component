import React, { Component } from 'react';

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
	}

	componentDidMount() {
		this.setDefaultCheck();
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
	}
	
	render() {
		return(
			<div className="select-input select-input" ref={this.container}>
				<p ref={this.title} onClick={this.openList} className="select-input__title select-input__title">
					<span>{this.props.title}</span>
				</p>
				<div className="select-input__list">
					{this.props.data.map((item) => 
						<div className="select-input__item" key={item.id}>
							{(item.isChecked === true || item.noPostCheck === true) &&
								<label>{item.text}<input className="select-input__input" type="radio" name={this.props.id} onChange={() => this.props.handleChange(this.props.id, item.id)} defaultChecked/></label>
							}
							{(item.isChecked !== true && item.noPostCheck !== true) &&
								<label>{item.text}<input className="select-input__input" type="radio" name={this.props.id} onChange={() => this.props.handleChange(this.props.id, item.id)}/></label>
							}
						</div>
					)}	
				</div>
			</div>
		)
	}
}

export default SelectInputComponent; 