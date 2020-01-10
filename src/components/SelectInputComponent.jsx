import React, { Component } from 'react';

class SelectInputComponent extends Component {
	writeOption = (item, number) => {
		return <option className="select-input__option" value={this.props.values[number]} key={item}>{item}</option>
	}
	
	render() {
		return(
			<div className="select-input">
				<p className="select-input__title">Роль пользователя:</p>
				
				<select id={this.props.id} onChange={this.props.change} className="select-input__select">
					{this.props.texts.map(this.writeOption)}
				</select>
			</div>
		)
	}
}

export default SelectInputComponent; 