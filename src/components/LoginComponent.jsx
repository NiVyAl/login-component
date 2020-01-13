import React, { Component } from 'react';
import { store } from '../store';
import ApiService from "../service/ApiService";
import InputComponent from "../components/InputComponent";
import axios from 'axios';

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      open: '', //пустая строка
    }
    
    this.container = React.createRef();

    store.subscribe(() => this.setState({open: store.getState()}));
  }
  
  componentWillMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  escFunction = (e) => {
      if (e.keyCode === 27) {
          this.close();
      }
  }
  

  handleChange = event => {
		if (event.target.id === "login") {
			this.setState({username: event.target.value})
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
        // this.setState({message : 'User log successfully.'});
        console.log(res);
        if (res.status === 200) {
          this.log(res)
        }
        // axios.defaults.headers.common.Authorization = res.data.token;
        // if (res.data.email) {
        //   this.log(res.data.email)
        // }
      })
      .catch(error => {
        console.log(error);
        if (error.response) {
          if (error.response.status === 401) {
            this.container.current.classList.add("login-container--error-password");
          }
        }
      })
  }

  log(res) {
    localStorage.setItem("log", res.data.user.username);
    localStorage.setItem("email", res.data.user.username);
    localStorage.setItem('token', res.data.token);
    axios.defaults.headers.common.Authorization = res.data.token;
    store.dispatch({ type: "log" });
  }

  close() {
    store.dispatch({ type: "close" });
  }


  render() {
    return (
      <div>
        { this.state.open === "open" &&
        <div ref={this.container} className="login-container">
          <div onClick={this.close} className="login-container__background"></div>
          <form className="login-container__window" onSubmit={this.handleSubmit}>
            <p className="login-container__title sub-title">Войти</p>
            <div className="login-container__form">
              <InputComponent text="email" name="login" handleChange={this.handleChange} type="email" maxLength="30" required/>
					    <InputComponent text="пароль" name="passwordLog" handleChange={this.handleChange} type="password" maxLength="20" required/>
              
              <p className="login-container__error">Неверный логин или пароль</p>
              
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
