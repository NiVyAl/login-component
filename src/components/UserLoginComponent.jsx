import React, { Component } from 'react';
import userAvatar from '../img/user-icon.png'
import axios from 'axios';
import { store } from '../store';

class UserLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.modal  = React.createRef();
    }

    modalOpen = (e) => {
        this.modal.current.classList.add("user-login__modal--active");
    }

    logOut = () => {
        localStorage.removeItem("log");
        delete axios.defaults.headers.common.Authorization;
        store.dispatch({ type: "close" });
    }

    render() {
        return(
            <div className="user-login">
                <button className="user-login__button" onClick={this.modalOpen}>
                    <span className="user-login__name">{localStorage.getItem("log")}</span>
                    <img src={userAvatar} alt="аватар пользователя" className="user-login__img"/>
                </button>

                <div className="user-login__modal-button"></div>
                
                <div ref={this.modal} className="user-login__modal">
                    <a className="user-login__link" href="/profile">Мои статью</a>
                    <a className="user-login__link" href="/addArticle/step1">Добавить статью</a>
                    <button onClick={this.logOut} className="user-login__link">Выйти</button>
                </div>
            </div>
        )
    }
}

export default UserLoginComponent;