import React, { Component } from 'react';
import ReviewerComponent from "../components/service/ReviewerComponent";
import ApiService from "../service/ApiService";
import checkAccessibility from '../service/checkAccessibility';

/**
 * Страница со списком рецензентов
 */
class AllReviewerComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    componentDidMount() {
        if (!checkAccessibility(["ADD_PRIVILEGE"]))
            window.location.href="/";

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
                    <p className="add-review__articleName">{ApiService.ArticlesCategories[0].text}</p>
                    <ReviewerComponent filter={ApiService.ArticlesCategories[0].id}/>
                </div>

                <div className="all-reviewer__subject">
                    <p className="add-review__articleName">{ApiService.ArticlesCategories[1].text}</p>
                    <ReviewerComponent filter={ApiService.ArticlesCategories[1].id}/>
                </div>

                <div className="all-reviewer__subject">
                    <p className="add-review__articleName">{ApiService.ArticlesCategories[2].text}</p>
                    <ReviewerComponent filter={ApiService.ArticlesCategories[2].id}/>
                </div>
            </div>
        )
    }
}

export default AllReviewerComponent;