import React, { Component } from 'react';
import { store } from '../store';
import ApiService from "../service/ApiService";
import InputComponent from "../components/InputComponent";

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      password: '',
      open: '',
    }

    store.subscribe(() => this.setState({open: store.getState()}));
  }

  handleChange = event => {
		if (event.target.id === "login") {
			this.setState({name: event.target.value})
		}

		if (event.target.id === "passwordLog") {
			this.setState({password: event.target.value})
    }
  }
  

  handleSubmit = async event => { 
    event.preventDefault();
    let user = {};
    for (let i in this.state) {    
      if ((this.state[i] !== "") && (i !== "open")) {
          user[i] = this.state[i]   
      }
    };
    ApiService.log(user)
            .then(res => {
                this.setState({message : 'User log successfully.'});
                console.log(res.data.email);
                if (res.data.email) {
                  this.log(res.data.email)
                }
            });
  }

  log(email) {
    localStorage.setItem("log", email);
    store.dispatch({ type: "log" });
  }

  close() {
    store.dispatch({ type: "close" });
  }


  render() {
    return (
      <div>
        { this.state.open === "open" &&
        <div className="login-container">
          <div onClick={this.close} className="login-container__background"></div>
          <form className="login-container__window" onSubmit={this.handleSubmit}>
            <p className="login-container__title sub-title">Войти</p>
            <div className="login-container__form">
              <InputComponent text="email" name="login" handleChange={this.handleChange} type="email" maxLength="30" required/>
					    <InputComponent text="пароль" name="passwordLog" handleChange={this.handleChange} type="password" maxLength="20" required/>
              
              <a href="/" className="login-container__remember-password">Не помню пароль</a>
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
