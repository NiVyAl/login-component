import React, { Component } from 'react';
import logo from '../img/logo.png';
import { store } from '../store';
import UserLoginComponent from './UserLoginComponent';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLog: store.getState(),
    }

    store.subscribe(() => this.setState({isLog: store.getState()}));
    // console.log("header " + this.state.isLog + store.getState());
  }
  
  logOpen() {
    store.dispatch( {type: "open"});
  }
  
  render() {
    return(
      <header className="header">
        <div className="header__logo logo-container">
          <a href="http://www.kstu.ru/"><img className="logo-container__logo logo" src={logo} alt="логотип КНИТУ"/></a>
          <h1 className="logo-container__title title"><a href="/" className="title__link">Вестник технологического университета</a></h1>
        </div>

        <div className="header__user">
          <div className="find header__find">
            <input type="text" className="find__input" placeholder="Введите поисковый запрос"/>
          </div>
          {this.state.isLog !== "log" &&
            <div className="header__user">
              <button onClick={this.logOpen} className="account-button--login button header__button">войти</button>
              <a href="/registration" className="account-button--registration button header__button">регистрация</a>
            </div>
          }
          {this.state.isLog === "log" &&
            <div className="header__user-login">
              <UserLoginComponent/>
            </div>
          }
        </div>
      </header>
    )
  }
}

export default HeaderComponent;