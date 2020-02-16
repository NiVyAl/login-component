import React, { Component } from 'react';

class ChooseReviewerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>Выбери автора!</div>
                <button onClick={() => this.props.close()}>Закрыть</button>
            </div>
            
        )
    }
}

export default ChooseReviewerComponent;