import React, { Component } from 'react';
import logo from '../img/logo.png';
import { store } from '../store';
import UserLoginComponent from './UserLoginComponent';
import TranslatableText from "./service/TranslatableText";
import Language from "./service/LanguageContext";
import SeachComponent from "./service/SeachComponent";
import {Link} from 'react-router-dom';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLog: store.getState(),
    }

    store.subscribe(() => this.setState({isLog: store.getState()}));
  }

  componentDidMount() {
    const lang = Language["_currentValue"];
    this.setState({lang: lang})
  }
  
  logOpen() {
    store.dispatch( {type: "open"});
  }

  changeLanguage = () => {
    console.log("change");
    if (this.state.lang === "ru") {
      localStorage.setItem("lang", "en");
    }
    if (this.state.lang === "en") {
      localStorage.setItem("lang", "ru");
    }
    window.location.reload();
  }
  
  render() {
    return(
      <header className="header">
        <div className="header__logo logo-container">
          <a href="http://www.kstu.ru/"><img className="logo-container__logo logo" src={logo} alt="логотип КНИТУ"/></a>
          <h1 className="logo-container__title title"><Link to="/" className="title__link"><TranslatableText 
                text={{
                  ru: "Вестник технологического университета",
                  en: "Bulletin of the Technological University",
                }}/></Link>
          </h1>
        </div>

        <div className="header__user">
          <SeachComponent placeHolder={{ru: "Введите поисковый запрос", en: "Search"}}/>
          <button onClick={this.changeLanguage} className={`account-button--lang button button--flag header__button ${this.state.lang === "ru" && "button--flag--ru"} ${this.state.lang === "en" && "button--flag--en"}`}></button>
          {this.state.isLog !== "log" &&
            <div className="header__user">
              <button onClick={this.logOpen} className="account-button--login button header__button"><TranslatableText 
                text={{
                  ru: "войти",
                  en: "log in",
                }}/>
              </button>
              <Link to="/registration" className="account-button--registration button header__button"><TranslatableText 
                text={{
                  ru: "регистрация",
                  en: "sign up",
                }}/>
              </Link>
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