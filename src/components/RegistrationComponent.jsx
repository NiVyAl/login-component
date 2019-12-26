import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputComponent from "../components/InputComponent";

class RegistrationComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            nameR: '',
            surnameR: '',
            middleNameR: '',
            name: '',
            surname: '',
            country: '',
            university: '',
            city: '',
            phone: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {};
        for (let i in this.state) {    
            if ((this.state[i] !== "") && (i !== "message")) {
                user[i] = this.state[i]
            }
        };
        console.log(user);
        ApiService.addUser(user)
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
            <div className="registration">
                <h2 className="registration__title sub-title">Регистрация</h2>
                <form onSubmit={this.saveUser}>
                    <InputComponent text="Имя" name="nameR" handleChange={this.handleChange} type="name" maxLength="20" isRequired={true}/>
                    
                    <div className="input-container">
                        <input type="name" id="surnameR" className="input-container__input" maxLength="20" onChange={this.handleChange} required/>
                        <label htmlFor="surnameR" className="input-container__label">Фамилия</label>
                    </div>
                    
                    <div className="input-container">
                        <input type="name" id="middleNameR" className="input-container__input" maxLength="20" onChange={this.handleChange} required/>
                        <label htmlFor="middleNameR" className="input-container__label">Отчество</label>
                    </div>
                    
                    <div className="input-container">
                        <input type="name" id="name" className="input-container__input" maxLength="20" onChange={this.handleChange} required/>
                        <label htmlFor="name" className="input-container__label">Имя (латиницей)</label>
                    </div>
                    
                    <div className="input-container">
                        <input type="name" id="surname" className="input-container__input" maxLength="20" onChange={this.handleChange} required/>
                        <label htmlFor="surname" className="input-container__label">фамилия (латиницей)</label>
                    </div>
                    
                    <div className="input-container">
                        <input type="text" id="country" className="input-container__input" maxLength="20" onChange={this.handleChange} required/>
                        <label htmlFor="country" className="input-container__label">Страна</label>
                    </div>
                    
                    <div className="input-container">
                        <input type="text" id="city" className="input-container__input" maxLength="20" onChange={this.handleChange} required/>
                        <label htmlFor="city" className="input-container__label">Город</label>
                    </div>
                    
                    <div className="input-container">
                        <input type="text" id="university" className="input-container__input" maxLength="30" onChange={this.handleChange} required/>
                        <label htmlFor="university" className="input-container__label">Университет</label>
                    </div>
                    
                    <div className="input-container">
                        <input type="tel" id="phone" className="input-container__input" maxLength="30" onChange={this.handleChange}required/>
                        <label htmlFor="phone" className="input-container__label">Телефон</label>
                    </div>
                    
                    <div className="input-container">
                        <input type="email" id="email" className="input-container__input" maxLength="30" onChange={this.handleChange} required/>
                        <label htmlFor="email" className="input-container__label">email</label>
                    </div>
                    
                    <div className="input-container">
                        <input type="password" id="password" className="input-container__input" maxLength="20" onChange={this.handleChange} autoComplete="new-password" required/>
                        <label htmlFor="password" className="input-container__label">Пароль</label>
                    </div>

                <button className="button registration__button" type="submit">Зарегистрироваться</button>
            </form>
    </div>
        );
    }
}

export default RegistrationComponent;