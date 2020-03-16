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
                    <p className="modal-window__title-description title-description">{this.props.title}ЭЛЕКТРОХИМИЧЕСКИЙ МЕТОД ИССЛЕДОВАНИЯ ПРОЦЕССОВ МИКРОБНОЙ КОРРОЗИИ</p>
                    <div className="choose-reviewer__reviewer-container reviewer-container">
                        <div className="reviewer-container__main">
                            <CheckboxComponent name="reviewer1" text="Игорь Николаевич Маресьев"/>
                            <CheckboxComponent name="reviewer2" text="Игорь Николаевич Маресьев"/>
                            <CheckboxComponent name="reviewer3" text="Игорь Николаевич Маресьев"/>
                            <CheckboxComponent name="reviewer4" text="Игорь Николаевич Маресьев"/>
                            <CheckboxComponent name="reviewer5" text="Игорь Николаевич Маресьев"/>
                            <CheckboxComponent name="reviewer6" text="Игорь Николаевич Маресьев"/>
                        </div>
                        <p className="text-button" onClick={this.moreOpen}>{this.state.moreButtonText}</p>
                        {this.state.isMoreOpen &&
                            <div className="reviewer-container__more">
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
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                                <CheckboxComponent name="reviewer7" text="Игорь Николаевич Маресьев"/>
                            </div>
                        }
                    </div>
                </form>
            </div>
            
        )
    }
}

export default ChooseReviewerComponent;