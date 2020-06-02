import React, { Component } from 'react';

class ClosePopupComponent extends Component {
    constructor(props) {
        super(props);
        this.modalButton = React.createRef();
        document.addEventListener("keydown", this.escFunction, false);

        this.state = {
            
        }
    }

    componentDidUpdate() {
        if (this.props.isOpen) {
            this.open();
        }
    }

    escFunction = (e) => {
        if (e.keyCode === 27) {
            this.close();
        }
    }

    close = () => {
        if (this.modalButton.current) {
            this.modalButton.current.classList.remove("close-popup-button--active");
            this.props.close();
        }
    }

    open = () => {
        this.modalButton.current.classList.add("close-popup-button--active");
    }

    render() {
        return(
            <div className="close-popup-button" onClick={this.close} ref={this.modalButton}></div>
        )
    }
}

export default ClosePopupComponent;