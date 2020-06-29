import React, { Component } from 'react';
import TranslatableText from "./TranslatableText";

class RadioButtonComponent extends Component {
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
            this.props.radioChange(defaultCheckedId);
        }
    }

    render() {
        return(
            <div className="radio-container">
                {this.props.data.map(item =>
                    <div className="radio-container__item" key={item.id}>
                        {item.isChecked === true &&
                            <input className="radio-container__input" type="radio" id={item.id} onChange={() => this.props.radioChange(item.id)} name={this.props.name} defaultChecked/>
                        }
                        {item.isChecked !== true &&
                            <input className="radio-container__input" type="radio" id={item.id} onChange={() => this.props.radioChange(item.id)} name={this.props.name}/>
                        }
                        <label className="radio-container__label" htmlFor={item.id}><TranslatableText text={item.text}></TranslatableText></label>
                    </div>
                )}
            </div>
        )
    }
}

export default RadioButtonComponent;