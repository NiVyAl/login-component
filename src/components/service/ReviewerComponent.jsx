import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ApiService from "../../service/ApiService";
import checkAccessibility from '../../service/checkAccessibility';

/**
 * Таблица со всеми рецензентами.
 */
class ReviewerComponent extends Component {
    constructor(props){
		super(props);

		this.state ={
            reviewers: [],
		}

		this.window = React.createRef();
	}

    componentDidMount = () => {
        if (!checkAccessibility(["ADD_PRIVILEGE"]))
            window.location.href="/";

        ApiService.getReviewers()
			.then((res) => {
				console.log(res);
                this.setState({reviewers: res.data});
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

    render() {
        return(
            <div ref={this.window}>
                {this.state.reviewers.length > 0 &&
                <tabel className="reviewer-container">
                    <thead>
                        <tr className="reviewer-container__tr reviewer-container__tr--description">
                            <td className="reviewer__item reviewer__item--name">ФИО Рецензента</td>
                            <td className="reviewer__item reviewer__item--description">находятся на рецензии</td> {/* находятся на рецензии */}
                            {/* <td className="reviewer__item reviewer__item--description">ожидают повторного рецензирования</td> ожидают повторного рецензирования */}
                            <td className="reviewer__item reviewer__item--description">написано рецензий</td> {/* написано рецензий (за все время) */}
                            {this.props.isChooseReviewer &&
                                <td className="reviewer__item reviewer__item--description">выбрать рецензента</td>
                            }
                            {!this.props.isChooseReviewer &&
                                <td className="reviewer__item reviewer__item--description">почта рецензента</td>
                            }
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.reviewers.map(item =>
                            <tr className="reviewer-container__tr" key={item.id}>
                                <td className="reviewer__item reviewer__item--name">{item.user.surnameR} {item.user.middleNameR}</td>
                                <td className="reviewer__item"><Link to="/" className="link">{item.articlesOnProcess}</Link></td> {/* находятся на рецензии */}
                                {/* <td className="reviewer__item"><Link to="/" className="link">{item.user.countOfDesignatedArticles}</Link></td> ожидают повторного рецензирования */}
                                <td className="reviewer__item"><Link to="/" className="link">{item.countOfWrittenReviews}</Link></td> {/* написано рецензий (за все время) */}
                                {this.props.isChooseReviewer &&
                                    <td className="reviewer__item"><input type="checkbox" onChange={(e) => this.props.handleChange(e, item.id)}/></td>
                                }
                                {!this.props.isChooseReviewer &&
                                    <td className="reviewer__item"><a href={'mailto:' + item.user.username} className="link">{item.user.username}</a></td>
                                }   
                            </tr>
                        )}
                    </tbody>
                </tabel>
                }
            </div>
        )
    }
}

export default ReviewerComponent;