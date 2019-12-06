import React, { Component } from 'react';
import axios, { post } from 'axios';
import url from '../url.js'

class LoginComponent extends Component {
  state = {
    name: '',
    password: '',
  }

  handleChange = event => {
		if (event.target.id === "login") {
			this.setState({name: event.target.value})
		}

		if (event.target.id === "password") {
			this.setState({password: event.target.value})
		}
  }
  
  handleSubmit = async event => { // e (event) - параметр который передается при субмите (можно написать любое слово)
    event.preventDefault(); // сбросили значение по умолчанию
    try {
      const response = await axios.post(url, { posted_data: this.state });
      console.log('Returned data:', response);
    } catch (e) {
      console.log(`Axios request failed: ` + e);
    }
  }

  close() {
    console.log("close");
  }


  render() {
    return (
      <div className="login-container">
        <div onClick={this.close} className="login-container__background"></div>
        <form className="login-container__window" onSubmit={this.handleSubmit}>
          <p className="login-container__title">Войти</p>
          <div className="login-container__form">
            <input type="name" id="login" className="login-container__input" maxLength="20" onChange={this.handleChange} required/>
            <label htmlFor="login" className="login-container__label">Логин</label>
            <input type="password" id="password" className="login-container__input" maxLength="20"onChange={this.handleChange} required/>
            <label htmlFor="password" className="login-container__label">пароль</label>
            <p className="login-container__incorrect">Неверный логин или пароль</p>
            <a href="#" className="login-container__remember-password">Не помню пароль</a>
          </div>
          <div className="login-container__buttons">
            <button type="submit" className="login-container__button button login-container__button--login">Войти</button>
            <a href="#" className="login-container__button button login-container__button--registration">Зарегистрироваться</a>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
