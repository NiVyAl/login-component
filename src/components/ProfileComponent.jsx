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
        console.log(JSON.parse(localStorage.getItem("roles")));
        for (let i of JSON.parse(localStorage.getItem("roles"))) {
            if (i === "REVIEW_PRIVILEGE") {
                this.setState({role: "review"})
                break
            }
            if (i === "WRITE_PRIVILEGE") {
                this.setState({role: "writer"})
            }
        }
    }
    
    checkRoll = () => {
        if (this.state.role === "review") {
            return(<ArticlesReviewContainerComponent/>)
        }
        if (this.state.role === "writer") {
            return(<ArticlesContainerComponent/>)
        }
    }
    
    render() {
        return(
            <div className="window profile">
                <h2 className="sub-title window__title">Профиль</h2>
                    <div className="profile__articles-container">
                        {this.checkRoll()}
                        {/* <ArticlesContainerComponent/> */}
                        {/* <ArticlesReviewContainerComponent/> */}
                    </div>
            </div>
        )
    }
}

export default ProfileComponent;