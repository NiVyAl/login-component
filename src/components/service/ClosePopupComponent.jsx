import React, { Component } from 'react';

class ClosePopupComponent extends Component {
    constructor(props) {
        super(props);
        this.modalButton = React.createRef();
        document.addEventListener("keydown", this.escFunction, false);

        this.state = {
            
        }
    }

    escFunction = (e) => {
        if (e.keyCode === 27) {
            this.close();
        }
    }

    close = () => {
        console.log("close");
        if (this.modalButton.current) {
            this.props.close(); // через эту функицию передает родителю что на него нажали
        }
    }

    render() {
        return(
            <React.Fragment>
                {this.props.isOpen === true &&
                    <div className="close-popup-button" onClick={this.close} ref={this.modalButton}></div>
                }
            </React.Fragment>
        )
    }
}

export default ClosePopupComponent;