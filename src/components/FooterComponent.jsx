import React, { Component } from 'react';
import TranslatableText from "./service/TranslatableText";
import {Link} from 'react-router-dom';

class FooterComponent extends Component {
    render() {
        return(
            <footer className="footer">
                <Link className="footer__link" target="_blank" to="/pdf/about.pdf"><TranslatableText 
                text={{
                  ru: "О журнале",
                  en: "About",
                }}/></Link>
                <Link className="footer__link" target="_blank" to="/pdf/ethics.pdf"><TranslatableText 
                text={{
                  ru: "Публикационная этика",
                  en: "Publication ethics",
                }}/></Link>
                <Link className="footer__link" target="_blank" to="/pdf/regular.pdf"><TranslatableText 
                text={{
                  ru: "Правила для авторов",
                  en: "Guide for authors",
                }}/></Link>
            </footer>
        )
    }
}

export default FooterComponent;