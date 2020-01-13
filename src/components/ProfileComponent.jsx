import React, { Component } from 'react';
import ApiService from "../service/ApiService";

class ProfileComponent extends Component {
    componentDidMount() {
        ApiService.test()
            .then((response) => {
                console.log(response);
            })
    }
    
    render() {
        return(
            <div className="window profile">
                <h2 className="sub-title window__title">Профиль</h2>
                
                <ul className="articles-container profile__articles-container">
                    <li className="articles-container__item">
                        <h3 className="articles-container__title">Влияние посещаемости на успевамость</h3>
                        {/* <p className="articles-container__status">Находится на проверке</p> */}
                        <p className="articles-container__status">Не доделана (<a href="/" className="link articles-container__link">продолжить создание</a>)</p>
                        <a href="/" className="link articles-container__link">Скачать</a>
                        
                        <button className="articles-container__button">Больше информации</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ProfileComponent;