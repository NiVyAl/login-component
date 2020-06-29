import React, { Component } from 'react';
import ReviewerComponent from "../components/service/ReviewerComponent";
import ApiService from "../service/ApiService";

class AllReviewerComponent extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {

    //     }
    // }
    componentDidMount() {
        ApiService.getReviewers()
            .then((response) => {
                console.log(response);
            })
    }

    render() {
        return(
            <div className="window all-reviewer">
                <h2 className="window__title sub-title">Все рецензенты</h2>
                <div className="all-reviewer__subject">
                    <p className="add-review__articleName">Химия (02.00.00)</p>
                    {/* <ReviewerComponent/> */}
                </div>

                <div className="all-reviewer__subject">
                    <p className="add-review__articleName">Химическая технология (05.17.00)</p>
                    {/* <ReviewerComponent/> */}
                </div>
            </div>
        )
    }
}

export default AllReviewerComponent;