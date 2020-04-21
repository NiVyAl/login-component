import React, { Component } from 'react';

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

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
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