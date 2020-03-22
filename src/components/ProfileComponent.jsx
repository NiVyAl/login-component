import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import checkLog from "../service/checkLog";
import ArticlesContainerComponent from './ArticlesContainerComponent';
import ArticlesReviewContainerComponent from './ArticlesReviewContainerComponent';
import SecretaryContainerComponent from './SecretaryContainerComponent';

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
        checkLog();
    }
    componentDidMount() {
        // ApiService.test()
        //     .then((response) => {
        //         console.log(response);
        //     })
        
        if (JSON.parse(localStorage.getItem("privilege"))) {
            // this.setState({privilege: JSON.parse(localStorage.getItem("roles"))});
            // console.log(JSON.parse(localStorage.getItem("roles")));
            for (let i of JSON.parse(localStorage.getItem("privilege"))) {
                // switch(i) {
                //     case "REVIEW_PRIVILEGE":
                //         this.setState({role: "review"})
                //         break
                //     case "WRITE_PRIVILEGE":
                //         this.setState({role: "writer"})
                //     case "ADD_PRIVILEGE":
                //         this.setState({role: "secretary"})
                // }
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
        if (this.state.role === "review") {
            return(<ArticlesReviewContainerComponent/>)
        }
        if (this.state.role === "writer") {
            return(<ArticlesContainerComponent/>)
        }
        if (this.state.role === "secretary") {
            return(<SecretaryContainerComponent/>)
        }
    }
    
    render() {
        return(
            <div className="window profile">
                <h2 className="sub-title window__title">Личный кабинет</h2>
                    <div className="profile__articles-container">
                        {this.checkRoll()}
                        {/* <ArticlesContainerComponent/> */}
                        {/* <ArticlesReviewContainerComponent/> */}
                    </div>

                    {/* {this.state.role === "review" &&
                    <div>
                        <h3 className="articles-container__title">Создать пользователя:</h3>
                        <a className="link" href="/addUser">Создать пользователя</a>
                    </div>
                    } */}
            </div>
        )
    }
}

export default ProfileComponent;