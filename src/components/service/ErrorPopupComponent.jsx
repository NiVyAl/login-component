import React, { Component } from 'react';
import Modal from 'react-modal';
import TranslatableText from './TranslatableText';

/**
 * Попап с ошибкой сетевого соединения
 */
class ErrorPopupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    customStyles = {
        content : {
            width: '40%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
        }
    };

    render() {
        return(
            <Modal isOpen={this.props.isOpen} onRequestClose={this.props.onClose} style={this.customStyles} ariaHideApp={false}>
                    <h2 className="sub-title error-popup__title"><TranslatableText 
                    text={{
                    ru: "Сетевая ошибка",
                    en: "Network Error",
                    }}/>
                    </h2>
                    <p className="error-popup__text"><TranslatableText 
                        text={{
                        ru: "Попробуйте позже",
                        en: "Network Error",
                        }}/>
                    </p>
                    <button className="button error-popup__button" onClick={this.props.onClose}>Ок</button>
                </Modal>
        )
    }
}

export default ErrorPopupComponent;