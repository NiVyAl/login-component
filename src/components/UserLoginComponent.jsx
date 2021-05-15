import React, { Component } from 'react';
import userAvatar from '../img/user-icon.png'
import axios from 'axios';
import TranslatableText from "./service/TranslatableText";
import { store } from '../store';
import {Link} from 'react-router-dom';
import ApiService from '../service/ApiService';

class UserLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.modal  = React.createRef();
        this.modalButton = React.createRef();
        document.addEventListener("keydown", this.escFunction, false);

        this.state = {
            isCanAddUser: false,
            isCanAddArticle: false,
            isCanAddReview: false,
        }
    }

    componentDidMount() {
        const allPrivelege = JSON.parse(localStorage.getItem("privilege"));
        if (allPrivelege) {
            for (let i of allPrivelege) {
                if (i === "ADD_PRIVILEGE") {
                    this.setState({isCanAddUser: true})
                }
                if (i === "WRITE_PRIVILEGE") {
                    this.setState({isCanAddArticle: true});
                }
                if (i === "REVIEW_PRIVILEGE") {
                    this.setState({isCanAddReview: true});
                }
            }
        }
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
        ApiService.logOut();
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
                        
                        <Link className="user-login__link" to="/profile"><TranslatableText 
                            text={{
                            ru: "Личный кабинет",
                            en: "Profile",
                            }}/>
                        </Link>
                        {this.state.isCanAddArticle &&
                            <React.Fragment>
                                <Link className="user-login__link" to="/myArticles"><TranslatableText 
                                    text={{
                                    ru: "Мои статьи",
                                    en: "Add article",
                                    }}/>
                                </Link>
                                <Link className="user-login__link" to="/addArticle/step1"><TranslatableText 
                                    text={{
                                    ru: "Добавить статью",
                                    en: "Add article",
                                    }}/>
                                </Link>
                            </React.Fragment>
                        }
                        {this.state.isCanAddUser &&
                            <React.Fragment>
                                <Link className="user-login__link" to="/allArticles"><TranslatableText 
                                    text={{
                                    ru: "Все поступившие статьи",
                                    en: "Received articles for review",
                                    }}/>
                                </Link>
                                <Link className="user-login__link" to="/addUser"><TranslatableText 
                                    text={{
                                    ru: "Создать пользователя",
                                    en: "Create user",
                                    }}/>
                                </Link>
                                <Link className="user-login__link" to="/allReviewer"><TranslatableText 
                                    text={{
                                    ru: "Все рецензенты",
                                    en: "All reviewer",
                                    }}/>
                                </Link>
                            </React.Fragment>
                        }
                        {this.state.isCanAddReview &&
                            <Link className="user-login__link" to="/articlesForReview"><TranslatableText 
                                text={{
                                ru: "Статьи ожидающие Вашей рецензии",
                                en: "Articles for review",
                                }}/>
                            </Link>
                        }
                        <button onClick={this.logOut} className="user-login__link user-login__link--logout"><TranslatableText 
                            text={{
                            ru: "Выйти",
                            en: "Log out",
                            }}/>
                        </button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default UserLoginComponent;