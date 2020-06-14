import React, { Component } from 'react';
import checkLog from "../service/checkLog";
import WriterContainerComponent from './WriterContainerComponent';
import ReviewerContainerComponent from './ReviewerContainerComponent';
import SecretaryContainerComponent from './SecretaryContainerComponent';
import TranslatableText from "./service/TranslatableText";

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
        checkLog();
    }
    componentDidMount() {
        if (JSON.parse(localStorage.getItem("privilege"))) {
            for (let i of JSON.parse(localStorage.getItem("privilege"))) {
                if (i === "REVIEW_PRIVILEGE") {
                    this.setState({role: "review"})
                    // break
                }
                
                if (i === "WRITE_PRIVILEGE") {
                    this.setState({role: "writer"})
                }
                
                if (i === "ADD_PRIVILEGE") {
                    this.setState({role: "secretary"})
                }
            }
        }
    }
    
    checkRoll = () => {
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
                        {this.checkRoll()}
                    </div>
            </div>
        )
    }
}

export default ProfileComponent;