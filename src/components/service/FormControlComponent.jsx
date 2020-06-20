import React, { Component } from 'react';

/*<FormControlComponent onSubmit={data => this.sendForm(data)} render={
    handleChange => (
        <React.Fragment>
            <InputComponent text={{ru: "Название", en: "Article name"}} name="articleName" handleChange={handleChange} type="text" maxLength="250" noPostValue={this.state.articleData.articleName} required/>
            <button className="button window__button" type="submit">Отправить"</button>
        </React.Fragment>
    )
}/> */

class FormControlComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    submit = (e) => {
        e.preventDefault();
        let data = {};
        for (let i in this.state) {    
            if (this.state[i] !== "") {
                data[i] = this.state[i]
            }
        };
        this.props.onSubmit(data);
    }

    handleChange = (name, value) => {
        // console.log(name + " " + value);
        this.setState({ [name]: value });
    }

    render() {
        return(
            <form onSubmit={this.submit}>
                {this.props.render(this.handleChange)}
            </form>
        )
    }
}

export default FormControlComponent;