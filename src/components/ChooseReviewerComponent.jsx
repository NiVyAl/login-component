import React, { Component } from 'react';

class ChooseReviewerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="modal-window">
                <div onClick={() => this.props.close()} className="modal-window__background"></div>
                <form className="choose-reviewer modal-window__window" onSubmit={this.handleSubmit}>
                    <p className="modal-window__title sub-title">Выберите рецензентов</p>
                    <p className="modal-window__title-description title-description">{this.props.title}ЭЛЕКТРОХИМИЧЕСКИЙ МЕТОД ИССЛЕДОВАНИЯ ПРОЦЕССОВ МИКРОБНОЙ КОРРОЗИИ</p>
                </form>
            </div>
            
        )
    }
}

export default ChooseReviewerComponent;