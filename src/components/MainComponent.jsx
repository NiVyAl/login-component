import React, { Component } from 'react';

class MainComponent extends Component {
    render() {
        return(
            <div>
                <p className="main__text">Главная страница</p>
                <a href="http://localhost:3000/registrationConfirm?token=aa3ff242-2269">подтверждение email</a>
            </div>
        )
    }
}

export default MainComponent;