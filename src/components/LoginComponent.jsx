import React, { Component } from 'react';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e) {
    alert('The value is: ' + this.input.value);
    e.preventDefault();
  }
 
  render() {
    return (
      <div class="login-container">
        <div onclick="logPopup('close')" class="login-container__background"></div>
        <form class="login-container__window" onsubmit="log()">
          <p class="login-container__title">Войти</p>
          <div class="login-container__form">
            <input type="name" id="login" class="login-container__input" maxlength="20" required/>
            <label for="login" class="login-container__label">Логин</label>
            <input type="password" id="password" class="login-container__input" maxlength="20" required/>
            <label for="password" class="login-container__label">пароль</label>
            <p class="login-container__incorrect">Неверный логин или пароль</p>
            <a href="#" class="login-container__remember-password">Не помню пароль</a>
          </div>
          <div class="login-container__buttons">
            <button type="submit" class="login-container__button button login-container__button--login">Войти</button>
            <a href="#" class="login-container__button button login-container__button--registration">Зарегистрироваться</a>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginComponent;