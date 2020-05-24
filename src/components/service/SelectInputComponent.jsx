import React, { Component } from 'react';

class SelectInputComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	writeOption = (item, number) => {
		if (this.props.default === number) {
			return <option className="select-input__option" value={this.props.values[number]} key={item} selected>{item}</option>
		} else {
			return <option className="select-input__option" value={this.props.values[number]} key={item}>{item}</option>
		}
	}

	componentDidMount() {
        let defaultCheckedId
        for (let i of this.props.data) {
            if (i.isChecked === true) {
                defaultCheckedId = i.id;
                this.setState({defaultCheckedId: defaultCheckedId});
            }
        }
        if (defaultCheckedId) {
            this.props.handleChange(defaultCheckedId);
        }
    }
	
	render() {
		return(
			<div className="select-input">
				<p className="select-input__title">{this.props.title}</p>
				
				<div>
					{this.props.data.map((item) => 
							<label key={item.id}>{item.text}<input type="radio" name={this.props.id} onChange={() => this.props.handleChange(this.props.id, item.id)}/></label>
					)}	
				</div>

				{/* <select id={this.props.id} onChange={this.props.change} className="select-input__select">
					{this.props.texts.map(this.writeOption)}
				</select> */}
			</div>
		)
	}
}

export default SelectInputComponent; 