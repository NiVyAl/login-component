import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import ArticlesContainerComponent from './ArticlesContainerComponent';
import ArticlesReviewContainerComponent from './ArticlesReviewContainerComponent';

class ProfileComponent extends Component {
    componentDidMount() {
        // ApiService.test()
        //     .then((response) => {
        //         console.log(response);
        //     })
    }
    
    render() {
        return(
            <div className="window profile">
                <h2 className="sub-title window__title">Профиль</h2>
                
                <div className="profile__articles-container">
                    {/* <ArticlesContainerComponent/> */}
                    <ArticlesReviewContainerComponent/>
                </div>
            </div>
        )
    }
}

export default ProfileComponent;