import React, { Component } from 'react';
import TranslatableText from "./service/TranslatableText";

class FooterComponent extends Component {
    render() {
        return(
            <footer className="footer">
                <a className="footer__link" target="_blank" href="/pdf/about.pdf"><TranslatableText 
                text={{
                  ru: "О журнале",
                  en: "About",
                }}/></a>
                <a className="footer__link" target="_blank" href="/pdf/ethics.pdf"><TranslatableText 
                text={{
                  ru: "Публикационная этика",
                  en: "Publication ethics",
                }}/></a>
                <a className="footer__link" target="_blank" href="/pdf/regular.pdf"><TranslatableText 
                text={{
                  ru: "Правила для авторов",
                  en: "Guide for authors",
                }}/></a>
            </footer>
        )
    }
}

export default FooterComponent;