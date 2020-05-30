import React, { Component } from 'react';

//<SelectInputComponent title="Раздел журнала" id="subject" handleChange={handleChange} data={this.selectData} noPostValue={this.state.articleData.subject}/>  
//selectData = [{id: "02.00.00", text: "Химия (02.00.00)", isChecked: true}, {id: "05.17.00", text: "Химическая технология (05.17.00)"}, {id: "05.13.00", text: "Информатика, вычислительная техника и управление (05.13.00)"}];

class SelectInputComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {

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
			this.props.handleChange(this.props.id, defaultCheckedId);
        }
	}
	
	render() {
		return(
			<div className="select-input">
				<p className="select-input__title">{this.props.title}</p>
					{this.props.data.map((item) => 
						<div>
							{item.isChecked === true &&
								<label key={item.id}>{item.text}<input type="radio" name={this.props.id} onChange={() => this.props.handleChange(this.props.id, item.id)}/></label>
							}
							{item.isChecked !== true &&
								<label key={item.id}>{item.text}<input type="radio" name={this.props.id} onChange={() => this.props.handleChange(this.props.id, item.id)}/></label>
							}
						</div>
					)}	
			</div>
		)
	}
}

export default SelectInputComponent; 