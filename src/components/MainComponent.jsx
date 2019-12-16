import React, { Component } from 'react';

class MainComponent extends Component {
    render() {
        return(
            <div>
                <p className="main__text">Главная страница</p>
                <a href="/download-article" className="main__link">Добавить статью</a>
            </div>
        )
    }
}

export default MainComponent;