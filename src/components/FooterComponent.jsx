import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return(
            <footer className="footer">
                <a className="footer__link" target="_blank" href="/pdf/about.pdf">О журнале</a>
                <a className="footer__link" target="_blank" href="/pdf/ethics.pdf">Публикационная этика</a>
                <a className="footer__link" target="_blank" href="/pdf/regular.pdf">Правила для авторов</a>
            </footer>
        )
    }
}

export default FooterComponent;