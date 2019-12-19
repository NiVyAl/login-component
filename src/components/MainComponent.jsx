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
            <div>
                {/* <p className="main__text">Главная страница</p>
                <a href="http://localhost:3000/registrationConfirm?token=aa3ff242-2269">подтверждение email</a><br></br>
                <a href="http://localhost:3000/addArticle/step1">отправка статьи</a> */}
                
                <div class="main__content content">
                    <div class="content__journals journals">
                    <h2 class="journals__title sub-title">Журналы: </h2>
                    <div class="journals__slider slider">
                        <button class="slider__button slider__button--left" onClick={this.sliderMove}></button>
                        <div class="slider__img-container">
                            <ul class="slider__list" >
                                <li class="slider__item"><a href="pdf/cover9.pdf" target="_blank" class="slider__link"><img class="slider__img" src={cover8}/></a></li>
                                <li class="slider__item"><a href="pdf/cover8.pdf" target="_blank" class="slider__link"><img class="slider__img" src={cover9}/></a></li>
                                <li class="slider__item"><a href="pdf/cover7.pdf" target="_blank" class="slider__link"><img class="slider__img" src={cover10}/></a></li>
                                <li class="slider__item"><a href="#" class="slider__link"><img class="slider__img" src={cover1}/></a></li>
                                <li class="slider__item"><a href="#" class="slider__link"><img class="slider__img" src={cover2}/></a></li>
                                <li class="slider__item"><a href="#" class="slider__link"><img class="slider__img" src={cover6}/></a></li>
                                <li class="slider__item"><a href="#" class="slider__link"><img class="slider__img" src={cover5}/></a></li>
                                <li class="slider__item"><a href="#" class="slider__link"><img class="slider__img" src={cover4}/></a></li>
                            </ul>
                        </div>
                        <button class="slider__button slider__button--right" onClick={this.sliderMove}></button>
                    </div>
                        </div>

                    <div class="content__latest latest">
                    <h2 class="latest__title sub-title">Последние статьи:</h2>

                    <ul class="latest__list">
                        <li class="latest__item">
                        <time class="latest__date">2019-T22-№9</time>
                        <a href="pdf/v-29.pdf" class="latest__link" target="_blank">АЛГОРИТМ ОБНАРУЖЕНИЯ СВЕТОВЫХ СИГНАЛОВ ТРАНСПОРТНЫХ СРЕДСТВ И СВЕТОФОРОВ</a>
                        <p class="latest__description">Ключевые слова: компьютерное зрение, обработка изображений, преобразование радиальной симметрии, детектор Кэнни.</p>
                        </li>

                        <li class="latest__item">
                        <time class="latest__date">2019-T22-№9</time>
                        <a href="pdf/v-5.pdf" class="latest__link" target="_blank">АДСОРБЦИОННАЯ СПОСОБНОСТЬ МОДИФИЦИРОВАННЫХ КЛИНОПТИЛОЛИТОВ: ТЕРМОДИНАМИЧЕСКАЯ ОЦЕНКА</a>
                        <p class="latest__description">Ключевые слова: адсорбция, цеолиты, сточные воды, серный полимер, ионы тяжелых металлов.</p>
                        </li>

                        <li class="latest__item">
                        <time class="latest__date">2019-T22-№9</time>
                        <a href="pdf/v-27.pdf" class="latest__link" target="_blank">РАСПРЕДЕЛЕННАЯ ОБРАБОТКА ДВУМЕРНЫХ МАССИВОВ ДАННЫХ
                            НА ОСНОВЕ АППАРАТНЫХ IP-ЯДЕР В АРХИТЕКТУРЕ ПЛИС</a>
                        <p class="latest__description">Ключевые слова: быстрое преобразование Фурье, оценки сложности, ПЛИС.</p>
                        </li>

                    </ul>
                    </div>
            </div>
            </div>
        )
    }
}

export default MainComponent;