import React, { Component } from 'react';
import ApiService from "../service/ApiService";

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
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        // let user = {email: this.state.email, password: this.state.password, nameR: this.state.nameR, surnameR: this.state.surnameR, middleNameR: this.state.middleNameR, name: this.state.name, surname: this.state.surname, country: this.state.country, university: this.state.university,};
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
                <h2 className="registration__title">Регистрация</h2>
                <form onSubmit={this.saveUser}>
                    <input type="name" id="nameR" className="login-container__input" maxLength="20" onChange={this.handleChange}/>
                    <label htmlFor="name" className="login-container__label">Имя</label>

                    <input type="name" id="surnameR" className="login-container__input" maxLength="20" onChange={this.handleChange}/>
                    <label htmlFor="surnameR" className="login-container__label">Фамилия</label>

                    <input type="name" id="middleNameR" className="login-container__input" maxLength="20" onChange={this.handleChange}/>
                    <label htmlFor="middleNameR" className="login-container__label">Отчество</label>

                    <input type="name" id="name" className="login-container__input" maxLength="20" onChange={this.handleChange} required/>
                    <label htmlFor="name" className="login-container__label">Имя (латиницей)</label>

                    <input type="name" id="surname" className="login-container__input" maxLength="20" onChange={this.handleChange} required/>
                    <label htmlFor="surname" className="login-container__label">фамилия (латиницей)</label>

                    <input type="text" id="country" className="login-container__input" maxLength="20" onChange={this.handleChange} required/>
                    <label htmlFor="country" className="login-container__label">Страна</label>

                    <input type="text" id="university" className="login-container__input" maxLength="20" onChange={this.handleChange} required/>
                    <label htmlFor="university" className="login-container__label">Университет</label>

                    <input type="email" id="email" className="login-container__input" maxLength="20" onChange={this.handleChange} required/>
                    <label htmlFor="email" className="login-container__label">email</label>

                    <input type="password" id="password" className="login-container__input" maxLength="20" onChange={this.handleChange} autoComplete="new-password" required/>
                    <label htmlFor="password" className="login-container__label">Пароль</label>
                {/* <div className="form-group">
                    <label>Имя:</label>
                    <input type="text" placeholder="username" name="username" className="form-control" value={this.state.username} onChange={this.onChange} required/>
                </div>

                <div className="form-group">
                    <label>Фамилия</label>
                    <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} required/>
                </div>

                <div className="form-group">
                    <label>Отчество</label>
                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange} required/>
                </div>

                <div className="form-group">
                    <label>Имя (латиницей)</label>
                    <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Salary:</label>
                    <input type="number" placeholder="salary" name="salary" className="form-control" value={this.state.salary} onChange={this.onChange}/>
                </div> */}

                <button className="button registration__button" type="submit">Зарегистрироваться</button>
            </form>
    </div>
        );
    }
}

export default RegistrationComponent;