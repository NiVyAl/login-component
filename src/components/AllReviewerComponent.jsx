import React, { Component } from 'react';
import ReviewerComponent from "../components/service/ReviewerComponent";

class AllReviewerComponent extends Component {
    render() {
        return(
            <div className="window all-reviewer">
                <h2 className="window__title sub-title">Все рецензенты</h2>

                <p className="add-review__articleName">Химия (02.00.00)</p>
                <ReviewerComponent/>
            </div>
        )
    }
}

export default AllReviewerComponent;