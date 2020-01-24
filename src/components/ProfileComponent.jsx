import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import ArticlesContainerComponent from './ArticlesContainerComponent';
import ArticlesReviewContainerComponent from './ArticlesReviewContainerComponent';

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
                
        }
    }
    componentDidMount() {
        // ApiService.test()
        //     .then((response) => {
        //         console.log(response);
        //     })
        this.setState({privilege: JSON.parse(localStorage.getItem("roles"))});

        for (let i of this.state.privilege) {
            if (i === "REVIEW_PRIVILEGE") {
                this.setState({role: "review"})
            }
        }
        // console.log(JSON.parse(localStorage.getItem("roles")));
    }
    
    checkRoll = (role) => {
        console.log(role);
        if (role === "REVIEW_PRIVILEGE") {
            console.log("review")
            return(<ArticlesReviewContainerComponent/>)
        } else {
            console.log("все остальные")
            return(<ArticlesContainerComponent/>)
        }
    }
    
    render() {
        return(
            <div className="window profile">
                <h2 className="sub-title window__title">Профиль</h2>
                
                {this.state.roles &&
                    <div className="profile__articles-container">
                        {this.state.roles.map(role =>
                            {this.checkRoll(role)}
                        )}
                        {/* <ArticlesContainerComponent/> */}
                        {/* <ArticlesReviewContainerComponent/> */}
                    </div>
                }
            </div>
        )
    }
}

export default ProfileComponent;