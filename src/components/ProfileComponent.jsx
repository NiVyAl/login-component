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
            <div className="window">
                <h2 className="sub-title window__title">Профиль</h2>
            </div>
        )
    }
}

export default ProfileComponent;