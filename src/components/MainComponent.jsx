import React, { Component } from 'react';
import cover1 from '../img/covers/1.jpg'
import cover2 from '../img/covers/2.jpg'
import cover4 from '../img/covers/4.jpg'
import cover5 from '../img/covers/5.jpg'
import cover6 from '../img/covers/6.jpg'
import cover8 from '../img/covers/8.jpg'
import cover9 from '../img/covers/9.jpg'
import cover10 from '../img/covers/10.jpg'
import TranslatableText from "./service/TranslatableText";
import LatestArticlesComponent from "./service/LatestArticlesComponent";
import {Link} from 'react-router-dom';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }


    sliderMove(e) {
        
        var sliderList = document.querySelector(".slider__list");
        var sliderItems = document.querySelectorAll(".slider__item");
        var howVisible = sliderList.offsetWidth/sliderItems[0].offsetWidth;
        var howHidden = sliderItems.length - howVisible;

        howVisible = sliderList.offsetWidth/sliderItems[0].offsetWidth;
        howHidden = sliderItems.length - howVisible;
        console.log(e.target.className);
        if (e.target.className === "slider__button slider__button--right") {
            sliderList.style.transform = "translateX(-" + howHidden * sliderItems[0].offsetWidth + "px)";
        }
        if (e.target.className === "slider__button slider__button--left") {
            sliderList.style.transform = "translateX(" + 0 + "px)";
        }
    }
    
    render() {
        return(        
                <div className="main__content content">
                    <div className="content__journals journals">
                        <h2 className="journals__title sub-title"><TranslatableText 
                            text={{
                            ru: "Журналы:",
                            en: "Journals:",
                            }}/>
                        </h2>
                        <div className="journals__slider slider">
                            <button className="slider__button slider__button--left" onClick={this.sliderMove}></button>
                            <div className="slider__img-container">
                                <ul className="slider__list" >
                                    <li className="slider__item"><Link to="/" target="_blank" className="slider__link"><img className="slider__img" src={cover8} alt="cover"/></Link></li>
                                    <li className="slider__item"><Link to="/" target="_blank" className="slider__link"><img className="slider__img" src={cover9} alt="cover"/></Link></li>
                                    <li className="slider__item"><Link to="/" target="_blank" className="slider__link"><img className="slider__img" src={cover10} alt="cover"/></Link></li>
                                    <li className="slider__item"><Link to="/" target="_blank" className="slider__link"><img className="slider__img" src={cover1} alt="cover"/></Link></li>
                                    <li className="slider__item"><Link to="/" target="_blank" className="slider__link"><img className="slider__img" src={cover2} alt="cover"/></Link></li>
                                    <li className="slider__item"><Link to="/" target="_blank" className="slider__link"><img className="slider__img" src={cover6} alt="cover"/></Link></li>
                                    <li className="slider__item"><Link to="/" target="_blank" className="slider__link"><img className="slider__img" src={cover5} alt="cover"/></Link></li>
                                    <li className="slider__item"><Link to="/" target="_blank" className="slider__link"><img className="slider__img" src={cover4} alt="cover"/></Link></li>
                                </ul>
                            </div>
                            <button className="slider__button slider__button--right" onClick={this.sliderMove}></button>
                        </div>
                    </div>
                   <LatestArticlesComponent/>
            </div>
        )
    }
}

export default MainComponent;