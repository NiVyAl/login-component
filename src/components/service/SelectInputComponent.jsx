import React, { Component } from 'react';

class SelectInputComponent extends Component {
	writeOption = (item, number) => {
		if (this.props.default === number) {
			return <option className="select-input__option" value={this.props.values[number]} key={item} selected>{item}</option>
		} else {
			return <option className="select-input__option" value={this.props.values[number]} key={item}>{item}</option>
		}
		
	}
	
	render() {
		return(
			<div className="select-input">
				<p className="select-input__title">{this.props.title}</p>
				
				<select id={this.props.id} onChange={this.props.change} className="select-input__select">
					{this.props.texts.map(this.writeOption)}
				</select>
			</div>
		)
	}
}

export default SelectInputComponent; 