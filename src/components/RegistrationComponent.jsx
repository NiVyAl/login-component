import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputComponent from "../components/service/InputComponent";
// import { store } from '../store';

class RegistrationComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            isRegistration: false,
        }
        this.saveUser = this.saveUser.bind(this);
        this.window = React.createRef();

        // if ((store.getState() === "log") && (!this.state.isRegistration)) {
        //     window.location.href="/";
        // }
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {};
        for (let i in this.state) {    
            console.log(i);
            if ((this.state[i] !== "") && (i != "isRegistration" )) {
                user[i] = this.state[i]
            }
        };
        console.log(user);
        this.window.current.classList.add("load");
        ApiService.registration(user)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    this.setState({isRegistration: true})
                    window.scroll(0, 0);
                    this.window.current.classList.remove("load");
                }
            });
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return(
            <div className="registration window" ref={this.window}>
                <h2 className="sub-title window__title">Регистрация</h2>
                {!this.state.isRegistration &&
                    <form onSubmit={this.saveUser}>
                        <InputComponent text="Имя" name="nameR" handleChange={this.handleChange} type="name" maxLength="20"/> {/*name для сервера, еще и id*/}
                        <InputComponent text="Фамилия" name="surnameR" handleChange={this.handleChange} type="name" maxLength="20"/>
                        <InputComponent text="Отчество" name="middleNameR" handleChange={this.handleChange} type="name" maxLength="20"/>
                        <InputComponent text="Имя (латиницей)" name="name" handleChange={this.handleChange} type="name" maxLength="20" required/>
                        <InputComponent text="фамилия (латиницей)" name="surname" handleChange={this.handleChange} type="name" maxLength="20" required/>
                        <InputComponent text="Страна" name="country" handleChange={this.handleChange} type="text" maxLength="20" required/>
                        <InputComponent text="Город" name="city" handleChange={this.handleChange} type="text" maxLength="20" required/>
                        <InputComponent text="Организация" name="organization" handleChange={this.handleChange} type="text" maxLength="30"/>
                        <InputComponent text="Телефон" name="phone" handleChange={this.handleChange} type="tel" maxLength="30" required/>
                        <InputComponent text="email" name="email" handleChange={this.handleChange} type="email" maxLength="30" required/>
                        <InputComponent text="Пароль" name="password" handleChange={this.handleChange} type="password" maxLength="20" autoComplete="new-password" required/>

                        <button className="button window__button" type="submit">Зарегистрироваться</button>
                    </form>
                }
                {this.state.isRegistration &&
                    <div>
                        <p className="registration__text">Регистрация прошла успешно, подтвердите ваш email: {this.state.email}</p>
                        {/* <p className="registration__text">подтвердите email {this.state.email}</p> */}
                    </div>
                }
            </div>
        );
    }
}

export default RegistrationComponent;