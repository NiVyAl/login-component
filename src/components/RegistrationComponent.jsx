import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputComponent from "../components/service/InputComponent";
import FormControlComponent from "../components/service/FormControlComponent";
import { store } from '../store';
import TranslatableText from "./service/TranslatableText";
import Language from "./service/LanguageContext";

class RegistrationComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            isRegistration: false,
        }
        this.saveUser = this.saveUser.bind(this);
        this.window = React.createRef();

        if ((store.getState() === "log") && (!this.state.isRegistration)) {
            window.location.href="/";
        }
    }

    componentDidMount() {
        this.setState({lang: Language["_currentValue"]});
    }

    saveUser = (data) => {
        this.window.current.classList.add("load");
        console.log(data);
        ApiService.registration(data)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    this.setState({isRegistration: true})
                    window.scroll(0, 0);
                    this.window.current.classList.remove("load");
                }
            });
    }

    render() {
        return(
            <div className="registration window" ref={this.window}>
                <h2 className="sub-title window__title"><TranslatableText 
                text={{
                  ru: "Регистрация",
                  en: "Sign up",
                }}/></h2>
                {!this.state.isRegistration &&
                    <FormControlComponent onSubmit={data => this.saveUser(data)} render={
                        handleChange => (
                            <React.Fragment>
                                {this.state.lang === "ru" &&
                                    <div className="registration__input-group">
                                        <InputComponent text="Имя" name="nameR" handleChange={handleChange} type="name" maxLength="20"/> {/*name для сервера, еще и id*/}
                                        <InputComponent text="Фамилия" name="surnameR" handleChange={handleChange} type="name" maxLength="20"/>
                                        <InputComponent text="Отчество" name="middleNameR" handleChange={handleChange} type="name" maxLength="20"/>
                                    </div>
                                }
                                <InputComponent text={{ru: "Имя (латиницей)", en: "Name"}} name="name" handleChange={handleChange} type="name" maxLength="20" required/>
                                <InputComponent text={{ru: "Фамилия (латиницей)", en: "Surname"}} name="surname" handleChange={handleChange} type="name" maxLength="20" required/>
                                <InputComponent text={{ru: "Страна", en: "Country"}} name="country" handleChange={handleChange} type="text" maxLength="20" required/>
                                <InputComponent text={{ru: "Город", en: "City"}} name="city" handleChange={handleChange} type="text" maxLength="20" required/>
                                <InputComponent text={{ru: "Организация", en: "Organization"}} name="organization" handleChange={handleChange} type="text" maxLength="30"/>
                                <InputComponent text={{ru: "Телефон", en: "Phone number"}} name="phone" handleChange={handleChange} type="tel" maxLength="30" required/>
                                <InputComponent text="email" name="email" handleChange={handleChange} type="email" maxLength="30" required/>
                                <InputComponent text={{ru: "Пароль", en: "password"}} name="password" handleChange={handleChange} type="password" maxLength="20" autoComplete="new-password" required/>

                                <button className="button window__button" type="submit"><TranslatableText 
                                    text={{
                                    ru: "Зарегистрироваться",
                                    en: "Sign up",
                                    }}/>
                                </button>
                            </React.Fragment>
                        )
                    }/>
                }
                {this.state.isRegistration &&
                    <div>
                        <p className="registration__text">Регистрация прошла успешно, подтвердите ваш email {this.state.email}</p>
                    </div>
                }
            </div>
        );
    }
}

export default RegistrationComponent;