import React, { Component } from 'react';
import axios, { post } from 'axios';
import url from '../url.js'
import { store } from '../store';
import ApiService from "../service/ApiService";

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      password: '',
      open: '',
    }

    store.subscribe(() => this.setState({open: store.getState()}));
    // store.subscribe(() => console.log("store state " + store.getState()));
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
    console.log(user);
    // try {
    //   const response = await axios.post("http://localhost:4000/users/auth", { user });
    //   console.log('Returned data:', response);
    // } catch (e) {
    //   console.log(`Axios request failed: ` + e);
    // }
    ApiService.log(user)
            .then(res => {
                this.setState({message : 'User log successfully.'});
                // this.props.history.push('/users');
                console.log(res.data.email);
                if (res.data.email) {
                  this.log(res.data.email)
                }
            });
    // this.log();
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
        {/* {console.log("this: " + this.state.open)} */}
        { this.state.open == "open" &&
        <div className="login-container">
          <div onClick={this.close} className="login-container__background"></div>
          <form className="login-container__window" onSubmit={this.handleSubmit}>
            <p className="login-container__title sub-title">Войти</p>
            <div className="login-container__form">
              <input type="name" id="login" className="login-container__input" maxLength="30" onChange={this.handleChange} required/>
              <label htmlFor="login" className="login-container__label">email</label>
              <input type="password" id="passwordLog" className="login-container__input" maxLength="20"onChange={this.handleChange} required/>
              <label htmlFor="passwordLog" className="login-container__label">пароль</label>
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
