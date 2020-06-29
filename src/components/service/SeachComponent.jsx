import React, {Component} from 'react';
import translateText from '../../service/translateText';
import checkRole from "../../service/checkRole";


class SeachComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        this.setState({text: translateText(this.props.placeHolder)});

        if (JSON.parse(localStorage.getItem("privilege"))) {
            const privilege = JSON.parse(localStorage.getItem("privilege"));
            this.setState({role: checkRole(privilege)});
        }
    }

    handleChange = (e) => {
        this.search(e.target.value);
    }

    search = (request) => { //поиск из статей доступных пользователя
        // let response;
        // if (this.state.role === "writer") {
        //     response = 
        // }
        // if (this.state.role === "secretary") {
        //     return(<SecretaryContainerComponent/>)
        // }
        // if (this.state.role === "review") {
        //     return(<ReviewerContainerComponent/>)
        // }
    }

    render() {
        return(
            <div className="find header__find">
                {this.state.text &&
                    <input type="text" className="find__input" onChange={this.handleChange} placeholder={this.state.text}/>
                }
            </div>
        )
    }
}

export default SeachComponent