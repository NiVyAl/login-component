import React, { Component } from 'react';
import CheckboxComponent from './service/CheckboxComponent';
import {Link} from 'react-router-dom';
import ReviewerComponent from './service/ReviewerComponent';
import ApiService from "../service/ApiService";

/**
 * Модальное окно для выбора рецензента
 */
class ChooseReviewerComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isMoreOpen: false,
            moreButtonText: "Показать всех рецензентов",
            data: [],
            reviewersIds: {},
        }

        this.window = React.createRef();
    }

    componentDidMount() {
        document.addEventListener("keydown", this.escClose);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.escClose);
    }

    escClose = (e) => {
        if (e.keyCode === 27) {
            this.props.close();
        }
    }
    
    moreOpen = () => {
        if (this.state.isMoreOpen) {
            this.setState({ moreButtonText: "Показать всех рецензентов" })
        } else {
            this.setState({ moreButtonText: "Показать рецензентов только данной темы" })
        }
        this.setState({isMoreOpen: !this.state.isMoreOpen});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let data = {};
        data.articleId = this.props.article.articleId;
        data.reviewersIds = [];
        for(let i in this.state.reviewersIds) {
            if (this.state.reviewersIds[i] === true)
                data.reviewersIds.push(i);
        }

        console.log(data.reviewersIds.length);
        console.log(data);
        if (data.reviewersIds.length === 0) {
            console.log(true);
            this.setState({isNotChecked: true})
            return;
        }

        ApiService.addReviewerToArticle(data)
			.then((res) => {
				console.log(res)
				this.setState({isSend: true});
                window.location.reload();
			})
			.catch((err) => {
				if (err.response && err.response.status === 401)
					ApiService.logOut();
				else 
					this.setState({ showErrorPopup: true });
			})
			.finally(() => {
				this.window.current.classList.remove("load");
			})
    }

    handleChange = (e, reviewerId) => {
        console.log(e.target.checked);
        let _reviewersIds = this.state.reviewersIds;
        _reviewersIds[reviewerId] = e.target.checked;
        this.setState({reviewersIds: _reviewersIds});
        if (this.state.isNotChecked)
            this.setState({isNotChecked: false});
    }

    render() {
        return(
            <div className="modal-window" ref={this.window}>
                <div onClick={() => this.props.close()} className="modal-window__background"></div>
                <form className="choose-reviewer modal-window__window" onSubmit={this.handleSubmit}>
                    <p className="modal-window__title sub-title">Выбор рецензента</p>
                    <p className="choose-reviewer__article-name modal-window__title-description title-description">Название: {this.props.article.articleName}</p>

                    <ReviewerComponent handleChange={this.handleChange} isChooseReviewer={true}/>
                    {this.state.isNotChecked &&
                        <p className="login-container__error">Не выбран рецензент</p>
                    }
                    <button type="submit" className="button">Отправить на рецензию</button>
                </form>
            </div>
            
        )
    }
}

export default ChooseReviewerComponent;