import React, { Component } from 'react';
import userAvatar from '../img/user-icon.png'
import axios from 'axios';
import { store } from '../store';

class UserLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.modal  = React.createRef();
        this.modalButton = React.createRef();
        document.addEventListener("keydown", this.escFunction, false);
    }

    escFunction = (e) => {
        if (e.keyCode === 27) {
            this.close();
        }
    }

    modalOpen = () => {
        this.modal.current.classList.add("user-login__modal--active");
        this.modalButton.current.classList.add("user-login__modal--active");
    }

    logOut = () => {
        // localStorage.removeItem("log");
        // localStorage.removeItem("token");
        localStorage.clear();
        delete axios.defaults.headers.common.Authorization;
        store.dispatch({ type: "close" });
        window.location.reload();
    }
    
    close = () => {
        if (this.modal.current) {
            this.modal.current.classList.remove("user-login__modal--active");
            this.modalButton.current.classList.remove("user-login__modal--active");    
        }
    }

    render() {
        return(
            <div>
                
                <div className="user-login__modal-button" onClick={this.close} ref={this.modalButton}></div>
                
                <div className="user-login">
                    <button className="user-login__button" onClick={this.modalOpen}>
                        <span className="user-login__name">{localStorage.getItem("log")}</span>
                        <img src={userAvatar} alt="аватар пользователя" className="user-login__img"/>
                    </button>
                    
                    <div ref={this.modal} className="user-login__modal">
                        <p className="user-login__modal-name">{localStorage.getItem("log")}</p>
                        <p className="user-login__email">{localStorage.getItem("email")}</p>
                        
                        <a className="user-login__link" href="/profile">Личный кабинет</a>
                        <a className="user-login__link" href="/addArticle/step1">Добавить статью</a>
                        <button onClick={this.logOut} className="user-login__link user-login__link--logout">Выйти</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default UserLoginComponent;