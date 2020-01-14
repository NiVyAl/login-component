import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputComponent from "../components/InputComponent";

class RegistrationComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            isRegistration: false,
        }
        this.saveUser = this.saveUser.bind(this);
        this.window = React.createRef();
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {};
        for (let i in this.state) {    
            if ((this.state[i] !== "") && (i !== this.state.isRegistration )) {
                user[i] = this.state[i]
            }
        };
        console.log(user);
        this.window.current.classList.add("load");
        ApiService.registration(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return(
            <div className="registration window" ref={this.window}>
                <h2 className="sub-title window__title">Регистрация</h2>
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
            </div>
        );
    }
}

export default RegistrationComponent;