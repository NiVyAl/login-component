import React, { Component } from 'react';
import axios, { post } from 'axios';
import url from '../url.js'
import { store } from '../store';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      password: '',
      open: '',
    }

    store.subscribe(() => console.log("state " + this.setState({open: store.getState()})));
    // store.subscribe(() => console.log("store state " + store.getState()));
  }

  handleChange = event => {
		if (event.target.id === "login") {
			this.setState({name: event.target.value})
		}

		if (event.target.id === "password") {
			this.setState({password: event.target.value})
    }
  }
  
  handleSubmit = async event => { // e (event) - параметр который передается при субмите (можно написать любое слово) //  async(делаем функцию асинхронной) используются при запросах на сервер чтоб, другие функции не ждали пока идет запрос
    event.preventDefault(); // сбросили значение по умолчанию
    try {
      const response = await axios.post(url, { posted_data: this.state });
      console.log('Returned data:', response);
    } catch (e) {
      console.log(`Axios request failed: ` + e);
    }
  }

  close() {
    store.dispatch({ type: "close" });
  }


  render() {
    return (
      <div>
        {console.log("this: " + this.state.open)}
        { this.state.open == "open" &&
        <div className="login-container">
          <div onClick={this.close} className="login-container__background"></div>
          <form className="login-container__window" onSubmit={this.handleSubmit}>
            <p className="login-container__title">Войти{console.log("console " + this.state.open)}</p>
            <div className="login-container__form">
              <input type="name" id="login" className="login-container__input" maxLength="30" onChange={this.handleChange} required/>
              <label htmlFor="login" className="login-container__label">email</label>
              <input type="password" id="password" className="login-container__input" maxLength="20"onChange={this.handleChange} required/>
              <label htmlFor="password" className="login-container__label">пароль</label>
              <p className="login-container__incorrect">Неверный логин или пароль</p>
              <a href="#" className="login-container__remember-password">Не помню пароль</a>
            </div>
            <div className="login-container__buttons">
              <button type="submit" className="login-container__button button login-container__button--login">Войти</button>
              <a href="/registration" className="login-container__button button login-container__button--registration">Зарегистрироваться</a>
            </div>
          </form>
        </div>
      }
      </div>
    );
  }
}

export default LoginComponent;
