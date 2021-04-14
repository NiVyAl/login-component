import React, { Component } from 'react';
import { store } from '../store';
import ApiService from "../service/ApiService";
import InputComponent from "../components/service/InputComponent";
import axios from 'axios';
import TranslatableText from "./service/TranslatableText";

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      open: '', //пустая строка
    }
    
    this.container = React.createRef();
    this.window = React.createRef();

    store.subscribe(() => this.setState({open: store.getState()}));
    
    document.addEventListener("keydown", this.escFunction);
  }

  escFunction = (e) => {
      if (e.keyCode === 27) {
          this.close();
      }
  }
  

  handleChange = (name, value) => {
		if (name === "login") {
			this.setState({username: value})
		}

		if (name === "passwordLog") {
			this.setState({password: value})
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
    this.window.current.classList.add("load");
    ApiService.log(user)
      .then(res => {
        console.log(res);
        this.window.current.classList.remove("load");
        if (res.status === 200) {
          this.log(res)
        }
      })
      .catch(error => {
        if (this.window.current) { // проверка на открытость окна
          this.window.current.classList.remove("load");
          if (error.response) {
            if (error.response.status === 401) {
              this.container.current.classList.add("login-container--error-password");
            }
          } else {
            this.container.current.classList.add("login-container--error-network");
          }
        }  
      })
  }

  log(res) {
    console.log(res.data);
    let userFullName;
    if ((res.data.user.nameR) && (res.data.user.surnameR)) {
      userFullName = `${res.data.user.nameR} ${res.data.user.surnameR}`;
    } else {
      userFullName = `${res.data.user.firstName} ${res.data.user.lastName}`;
    }
    localStorage.setItem("log", userFullName);
    localStorage.setItem("email", res.data.user.username);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('userId', res.data.user.id);
    axios.defaults.headers.common.Authorization = res.data.token;
    localStorage.setItem('privilege', JSON.stringify(res.data.user.roles)); // сохранение роли
    
    store.dispatch({ type: "log" });
    
    window.location.reload();
  }

  close() {
    if ((store.getState() !== "log") && (store.getState() !== "close")) { // если уже залогинен то 
      store.dispatch({ type: "close" });
    }
  }


  render() {
    return (
      <div>
        { this.state.open === "open" &&
        <div ref={this.container} className="login-container modal-window">
          <div onClick={this.close} className="modal-window__background"></div>
          <form className="modal-window__window" onSubmit={this.handleSubmit} ref={this.window}>
            <p className="modal-window__title sub-title"><TranslatableText 
                text={{
                  ru: "Войти",
                  en: "Log in",
                }}/></p>
            <div className="login-container__form">
              <InputComponent text="email" name="login" handleChange={this.handleChange} type="email" maxLength="60" required/>
					    <InputComponent text={{ru: "пароль", en: "password"}} name="passwordLog" handleChange={this.handleChange} type="password" maxLength="60" required/>
              
              <p className="login-container__error">Неверный логин или пароль</p>
              <p className="login-container__error--network-text">Проблема соединения с сервером</p>
              
              <a href="/" className="login-container__remember-password link"><TranslatableText 
                text={{
                  ru: "Не помню пароль",
                  en: "Forgot password",
                }}/></a>
            </div>
            <div className="login-container__buttons">
              <button type="submit" className="login-container__button button login-container__button--login"><TranslatableText 
                text={{
                  ru: "Войти",
                  en: "Log in",
                }}/></button>
              <a href="/registration" className="login-container__button button login-container__button--registration"><TranslatableText 
                text={{
                  ru: "Зарегистрироваться",
                  en: "Sign up",
                }}/></a>
            </div>
          </form>
        </div>
      }
      </div>
    );
  }
}

export default LoginComponent;
