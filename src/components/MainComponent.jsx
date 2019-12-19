import React, { Component } from 'react';
import cover1 from '../img/covers/1.jpg'
import cover2 from '../img/covers/2.jpg'
import cover3 from '../img/covers/3.jpg'
import cover4 from '../img/covers/4.jpg'
import cover5 from '../img/covers/5.jpg'
import cover6 from '../img/covers/6.jpg'
import cover7 from '../img/covers/7.jpg'
import cover8 from '../img/covers/8.jpg'
import cover9 from '../img/covers/9.jpg'
import cover10 from '../img/covers/10.jpg'

class MainComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }
    
    sliderMove() {
        console.log("move");
    }
    
    render() {
        return(        
                <div className="main__content content">
                    <div className="content__journals journals">
                    <h2 className="journals__title sub-title">Журналы: </h2>
                    <div className="journals__slider slider">
                        <button className="slider__button slider__button--left" onClick={this.sliderMove}></button>
                        <div className="slider__img-container">
                            <ul className="slider__list" >
                                <li className="slider__item"><a href="pdf/cover9.pdf" target="_blank" className="slider__link"><img className="slider__img" src={cover8}/></a></li>
                                <li className="slider__item"><a href="pdf/cover8.pdf" target="_blank" className="slider__link"><img className="slider__img" src={cover9}/></a></li>
                                <li className="slider__item"><a href="pdf/cover7.pdf" target="_blank" className="slider__link"><img className="slider__img" src={cover10}/></a></li>
                                <li className="slider__item"><a href="#" className="slider__link"><img className="slider__img" src={cover1}/></a></li>
                                <li className="slider__item"><a href="#" className="slider__link"><img className="slider__img" src={cover2}/></a></li>
                                <li className="slider__item"><a href="#" className="slider__link"><img className="slider__img" src={cover6}/></a></li>
                                <li className="slider__item"><a href="#" className="slider__link"><img className="slider__img" src={cover5}/></a></li>
                                <li className="slider__item"><a href="#" className="slider__link"><img className="slider__img" src={cover4}/></a></li>
                            </ul>
                        </div>
                        <button className="slider__button slider__button--right" onClick={this.sliderMove}></button>
                    </div>
                        </div>

                    <div className="content__latest latest">
                    <h2 className="latest__title sub-title">Последние статьи:</h2>

                    <ul className="latest__list">
                        <li className="latest__item">
                        <time className="latest__date">2019-T22-№9</time>
                        <a href="pdf/v-29.pdf" className="latest__link" target="_blank">АЛГОРИТМ ОБНАРУЖЕНИЯ СВЕТОВЫХ СИГНАЛОВ ТРАНСПОРТНЫХ СРЕДСТВ И СВЕТОФОРОВ</a>
                        <p className="latest__description">Ключевые слова: компьютерное зрение, обработка изображений, преобразование радиальной симметрии, детектор Кэнни.</p>
                        </li>

                        <li className="latest__item">
                        <time className="latest__date">2019-T22-№9</time>
                        <a href="pdf/v-5.pdf" className="latest__link" target="_blank">АДСОРБЦИОННАЯ СПОСОБНОСТЬ МОДИФИЦИРОВАННЫХ КЛИНОПТИЛОЛИТОВ: ТЕРМОДИНАМИЧЕСКАЯ ОЦЕНКА</a>
                        <p className="latest__description">Ключевые слова: адсорбция, цеолиты, сточные воды, серный полимер, ионы тяжелых металлов.</p>
                        </li>

                        <li className="latest__item">
                        <time className="latest__date">2019-T22-№9</time>
                        <a href="pdf/v-27.pdf" className="latest__link" target="_blank">РАСПРЕДЕЛЕННАЯ ОБРАБОТКА ДВУМЕРНЫХ МАССИВОВ ДАННЫХ
                            НА ОСНОВЕ АППАРАТНЫХ IP-ЯДЕР В АРХИТЕКТУРЕ ПЛИС</a>
                        <p className="latest__description">Ключевые слова: быстрое преобразование Фурье, оценки сложности, ПЛИС.</p>
                        </li>

                    </ul>
                    </div>
            </div>
        )
    }
}

export default MainComponent;