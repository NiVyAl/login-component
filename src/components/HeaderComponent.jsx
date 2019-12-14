import React, { Component } from 'react';
import logo from '../img/logo.png';
import { store } from '../store';
import userAvatar from '../img/user-icon.png'

class HeaderComponent extends Component {
  logOpen() {
    store.dispatch( {type: "open"});
  }
  
  render() {
    return(
      <header className="header">
        <div className="header__logo logo-container">
          <a href="http://www.kstu.ru/"><img className="logo-container__logo logo" src={logo}/></a>
          <h1 className="logo-container__title title"><a href="/" className="title__link">Вестник технологического университета</a></h1>
        </div>

        <div className="header__user">
          <div className="find header__find">
            <input type="text" className="find__input" placeholder="Введите поисковый запрос"/>
          </div>
          <button onClick={this.logOpen} className="account-button--login button header__button">войти</button>
          <a href="/registration" className="account-button--registration button header__button">регистрация</a>
          <a href="#" className="user-login">
            <span className="user-login__name">admin</span>
            <img src={userAvatar} className="user-login__img"/>
          </a>
        </div>
      </header>
    )
  }
}

export default HeaderComponent;