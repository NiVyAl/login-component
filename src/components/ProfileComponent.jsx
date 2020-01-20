import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import ArticlesContainerComponent from './ArticlesContainerComponent';

class ProfileComponent extends Component {
    componentDidMount() {
        // ApiService.test()
        //     .then((response) => {
        //         console.log(response);
        //     })
        ApiService.getArticles(localStorage.getItem("userId"))
            .then((response) => {
                console.log(response)
            })
    }
    
    render() {
        return(
            <div className="window profile">
                <h2 className="sub-title window__title">Профиль</h2>
                
                <div className="profile__articles-container">
                    <ArticlesContainerComponent/>
                </div>
            </div>
        )
    }
}

export default ProfileComponent;