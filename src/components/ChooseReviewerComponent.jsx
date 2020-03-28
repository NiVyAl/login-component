import React, { Component } from 'react';
import CheckboxComponent from './service/CheckboxComponent';

class ChooseReviewerComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isMoreOpen: false,
            moreButtonText: "Показать всех рецензентов",
        }
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

    render() {
        return(
            <div className="modal-window">
                <div onClick={() => this.props.close()} className="modal-window__background"></div>
                <form className="choose-reviewer modal-window__window" onSubmit={this.handleSubmit}>
                    <p className="modal-window__title sub-title">Выберите рецензентов</p>
                    <p className="choose-reviewer__article-name modal-window__title-description title-description">{this.props.title}ЭЛЕКТРОХИМИЧЕСКИЙ МЕТОД ИССЛЕДОВАНИЯ ПРОЦЕССОВ МИКРОБНОЙ КОРРОЗИИ</p>
                    <div className="choose-reviewer__reviewer-container reviewer-container">
                        <div className="reviewer-container__sub-container reviewer-container__sub-container--main">
                            <CheckboxComponent name="reviewer1" text="Игорь Николаевич Маресьев"/>
                            {/* <a href="/allReviewer">Информация о всех рецентах</a> */}
                            <CheckboxComponent name="reviewer2" text="Игорь Николаевич Маресьев"/>
                            <CheckboxComponent name="reviewer3" text="Игорь Николаевич Маресьев"/>
                            <CheckboxComponent name="reviewer4" text="Игорь Николаевич Маресьев"/>
                            <CheckboxComponent name="reviewer5" text="Игорь Николаевич Маресьев"/>
                            <CheckboxComponent name="reviewer6" text="Игорь Николаевич Маресьев"/>
                        </div>
                        <p className="reviewer-container__button-more text-button" onClick={this.moreOpen}>{this.state.moreButtonText}</p>
                        {this.state.isMoreOpen &&
                            <div className="reviewer-container__sub-container reviewer-container__sub-container--more">
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer8" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer9" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer10" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                            </div>
                        }
                        <button type="submit" className="button">Отправить на рецензию</button>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default ChooseReviewerComponent;