import React, { Component } from 'react';
import checkLog from "../service/checkLog";
import checkRole from "../service/checkRole";
import WriterContainerComponent from './WriterContainerComponent';
import ReviewerContainerComponent from './ReviewerContainerComponent';
import SecretaryContainerComponent from './SecretaryContainerComponent';
import TranslatableText from "./service/TranslatableText";
import ApiService from "../service/ApiService";

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
        checkLog();
    }
    
    componentDidMount() {
        console.log("mount");
        const data = {"login": "test13", "password": "test13", "email": "test13"}
        console.log(data);
        ApiService.NewTest(data)
			.then((res) => {
				console.log(res);
            })
            
        if (JSON.parse(localStorage.getItem("privilege"))) { //если в localStorage хранятся привилегии
            const privilege = JSON.parse(localStorage.getItem("privilege"));
            this.setState({role: checkRole(privilege)}); // заганяем в this.state.role роль пользователя
        }
    }
    
    contentRender = () => {
        if (this.state.role === "writer") {
            // return(<SecretaryContainerComponent/>) // ВРЕМЕННО!!!
            return(<ReviewerContainerComponent/>) // ВРЕМЕННО!!!
            // return(<WriterContainerComponent/>)
        }
        if (this.state.role === "secretary") {
            return(<SecretaryContainerComponent/>)
        }
        if (this.state.role === "review") {
            return(<ReviewerContainerComponent/>)
        }
    }
    
    render() {
        return(
            <div className="window profile">
                <h2 className="sub-title window__title"><TranslatableText 
                    text={{
                    ru: "Личный кабинет",
                    en: "Profile",
                    }}/>
                </h2>
                    <div className="profile__articles-container">
                        {this.contentRender()}
                    </div>
            </div>
        )
    }
}

export default ProfileComponent;