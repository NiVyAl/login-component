import React, { Component } from 'react';
import TranslatableText from "./TranslatableText";
// import axios from 'axios';

class LatestArticlesComponent extends Component {
    constructor(props) {
        super(props);
        // this.iframe = React.createRef();

        this.state = {

        }


    }

    // componentDidMount() {
    //     // let response = axios.get("https://elibrary.ru/title_items.asp?id=8488");
    //     // console.log(response);

    //     // console.log(this.iframe.current);
    //     this.iframe.current.onload = () => {
    //         this.setLatest();
    //     }
    // }

    // setLatest = () => {
    //     // console.log(this.iframe.current);
    //     let iframe = this.iframe.current;
    //     // console.log(iframe.contentWindow.document.getElementById("restab"));
    //     console.log(iframe.contentDocument);
    // }

    render() {
        return(
                <div className="content__latest latest">
                    <h2 className="latest__title sub-title"><TranslatableText 
                        text={{
                        ru: "Последние статьи:",
                        en: "Latest articles",
                        }}/>
                    </h2>

                    <ul className="latest__list">
                        <li className="latest__item">
                            <time className="latest__date">2020-T23-№4</time>
                            <a href="https://www.elibrary.ru/item.asp?id=42739012" className="latest__link" target="_blank"><TranslatableText 
                                text={{
                                ru: "ОБЗОР ОСНОВНЫХ МЕТОДОВ ОПРЕДЕЛЕНИЯ ОСТАТОЧНОГО КОЛИЧЕСТВА АНТИБИОТИКОВ В МЕДЕ",
                                en: "REVIEW OF BASIC METHODS FOR DETERMINING RESIDUAL QUANTITIES OF ANTIBIOTICS IN HONEY",
                                }}/>
                            </a>
                            <p className="latest__description">
                                <TranslatableText 
                                    text={{
                                    ru: "Ключевые слова:",
                                    en: "Keys:",
                                    }}
                                />
                                <span className="latest__description--words"><TranslatableText 
                                        text={{
                                        ru: "ОСТАТОЧНЫЕ КОЛИЧЕСТВА, АНТИБИОТИКИ, МЕД, ЖИДКОСТНАЯ ХРОМАТОГРАФИЯ, МАСС-СПЕКТРОМЕТРИЯ",
                                        en: "RESIDUES, ANTIBIOTICS, HONEY, LIQUID CHROMATOGRAPHY, MASS SPECTROMETRY.",
                                        }}
                                    />
                                </span>	
                            </p>
                        </li>

                        <li className="latest__item">
                            <time className="latest__date">2020-T23-№4</time>
                            <a href="https://www.elibrary.ru/item.asp?id=42739014" className="latest__link" target="_blank"><TranslatableText 
                                text={{
                                ru: "ОПТИЧЕСКИЕ И ЛЮМИНЕСЦЕНТНЫЕ СВОЙСТВА АДДУКТОВ ТРИС(Β-ДИКЕТОНАТОВ) ИТТРИЯ(III)",
                                en: "OPTICAL AND LUMINESCENT PROPERTIES OF THE ADDUCTS OF YTTRIUM(III) TRIS (В-DIKETONATES)",
                                }}/>
                            </a>
                            <p className="latest__description">
                                <TranslatableText 
                                    text={{
                                    ru: "Ключевые слова:",
                                    en: "Keys:",
                                    }}
                                />
                                <span className="latest__description--words">
                                    <TranslatableText 
                                        text={{
                                        ru: "КОМПЛЕКСЫ ИТТРИЯ(III), ЛЮМИНЕСЦЕНЦИЯ",
                                        en: "YTTRIUM(III) COMPLEX, LUMINESCENCE",
                                        }}
                                    />
                                </span>	
                            </p>
                        </li>

                        <li className="latest__item">
                            <time className="latest__date">2020-T23-№4</time>
                            <a href="https://www.elibrary.ru/item.asp?id=42739015" className="latest__link" target="_blank"><TranslatableText 
                                text={{
                                ru: "КВАНТОВО-ХИМИЧЕСКОЕ ИЗУЧЕНИЕ СТРУКТУРЫ И ВОССТАНОВИТЕЛЬНОЙ АКТИВНОСТИ ЭТИЛЕНДИАМИНТЕТРААЦЕТАТ-СУЛЬФИТНЫХ КОМПЛЕКСОВ ВИСМУТА (III)",
                                en: "QUANTUM CHEMICAL STUDY OF THE STRUCTURE AND REDUCTION ACTIVITY OF ETHYLENEDIAMINETETRAACETATE-SULPHITE COMPLEXES OF BISMUTH (III)",
                                }}/>
                            </a>
                            <p className="latest__description">
                                <TranslatableText 
                                    text={{
                                    ru: "Ключевые слова:",
                                    en: "Keys:",
                                    }}
                                />
                                <span className="latest__description--words">
                                    <TranslatableText 
                                        text={{
                                        ru: "КВАНТОВО-ХИМИЧЕСКИЙ РАСЧЕТ, СТРУКТУРА, ГЕОМЕТРИЧЕСКИЕ ПАРАМЕТРЫ, КОМПЛЕКС ВИСМУТА (III), ЭТИЛЕНДИАМИНТЕТРААЦЕТАТ-ИОН, СУЛЬФИТ-ИОН, АКЦЕПТОРНАЯ ОРБИТАЛЬ, ЭЛЕКТРОВОССТАНОВЛЕНИЕ",
                                        en: "QUANTUM CHEMICAL CALCULATION, STRUCTURE, GEOMETRICAL PARAMETERS, BISMUTH(III) COMPLEX, ETHYLENEDIAMINETETRAACETATE ION, SULFITE ION, ACCEPTOR ORBITAL, ELECTROREDUCTION",
                                        }}
                                    />
                                </span>	
                            </p>
                        </li>

                        <li className="latest__item">
                            <time className="latest__date">2020-T23-№4</time>
                            <a href="https://www.elibrary.ru/item.asp?id=42739016" className="latest__link" target="_blank"><TranslatableText 
                                text={{
                                ru: "ВЛИЯНИЕ ЦИТРАТ-ИОНОВ НА СТРУКТУРНО-МОРФОЛОГИЧЕСКИЕ И БИОЛОГИЧЕСКИЕ СВОЙСТВА НАНОРАЗМЕРНОГО БИОМИМЕТИЧЕСКОГО ГИДРОКСИАПАТИТА, ДОПИРОВАННОГО СИЛИКАТ- И КАРБОНАТ-АНИОНАМИ",
                                en: "INFLUENCE OF CITRATE IONS ON STRUCTURAL, MORPHOLOGICAL, AND BIOLOGICAL PROPERTIES OF NANOSIZED BIOMIMETIC HYDROXYAPATITE DOPED BY SILICATE AND CARBONATE ANIONS",
                                }}/>
                            </a>
                            <p className="latest__description">
                                <TranslatableText 
                                    text={{
                                    ru: "Ключевые слова:",
                                    en: "Keys:",
                                    }}
                                />
                                <span className="latest__description--words">
                                    <TranslatableText 
                                        text={{
                                        ru: "ГИДРОКСИАПАТИТ, БИОМИМЕТИЧЕСКИЙ, СТРУКТУРНО-МОРФОЛОГИЧЕСКИЙ, ЦИТРАТ-ИОН, КАРБОНАТ, СИЛИКАТ, БИОАКТИВНОСТЬ",
                                        en: "QHYDROXYAPATITE, BIOMIMETIC, STRUCTURAL, MORPHOLOGICAL, CITRATE ION, CARBONATE, SILICATE, BIOACTIVITY",
                                        }}
                                    />
                                </span>	
                            </p>
                        </li>

                        {/* <li className="latest__item">
                        <time className="latest__date">2019-T22-№9</time>
                        <a href="/" className="latest__link" target="_blank">АДСОРБЦИОННАЯ СПОСОБНОСТЬ МОДИФИЦИРОВАННЫХ КЛИНОПТИЛОЛИТОВ: ТЕРМОДИНАМИЧЕСКАЯ ОЦЕНКА</a>
                        <p className="latest__description">Ключевые слова: адсорбция, цеолиты, сточные воды, серный полимер, ионы тяжелых металлов.</p>
                        </li>

                        <li className="latest__item">
                        <time className="latest__date">2019-T22-№9</time>
                        <a href="/" className="latest__link" target="_blank">РАСПРЕДЕЛЕННАЯ ОБРАБОТКА ДВУМЕРНЫХ МАССИВОВ ДАННЫХ
                            НА ОСНОВЕ АППАРАТНЫХ IP-ЯДЕР В АРХИТЕКТУРЕ ПЛИС</a>
                        <p className="latest__description">Ключевые слова: быстрое преобразование Фурье, оценки сложности, ПЛИС.</p>
                        </li> */}

                    </ul>
                </div>
        )
    }
}

export default LatestArticlesComponent;