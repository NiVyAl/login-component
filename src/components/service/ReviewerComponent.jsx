import React, { Component } from 'react';
import {Link} from 'react-router-dom';

/**
 * Таблица со всеми рецензентами.
 */
class ReviewerComponent extends Component {
    render() {
        return(
            <tabel className="reviewer-container">
                <thead>
                    <tr className="reviewer-container__tr reviewer-container__tr--description">
                        <td className="reviewer__item reviewer__item--name">ФИО Рецензента</td>
                        <td className="reviewer__item reviewer__item--description"><span className="one-line">находятся на</span> рецензии</td> {/* находятся на рецензии */}
                        <td className="reviewer__item reviewer__item--description">ожидают повторного рецензирования</td> {/* ожидают повторного рецензирования*/}
                        <td className="reviewer__item reviewer__item--description">написано рецензий <span className="one-line">(за все время)</span></td> {/* написано рецензий (за все время) */}
                    </tr>
                </thead>

                <tbody>
                    {/* Тут цикл */}
                    <tr className="reviewer-container__tr">
                        <td className="reviewer__item reviewer__item--name">Иванов Иван Иванович</td>
                        <td className="reviewer__item"><Link to="/" className="link">10</Link></td> {/* находятся на рецензии */}
                        <td className="reviewer__item"><Link to="/" className="link">50</Link></td> {/* ожидают повторного рецензирования*/}
                        <td className="reviewer__item"><Link to="/" className="link">3</Link></td> {/* написано рецензий (за все время) */}
                    </tr>

                    <tr className="reviewer-container__tr">
                        <td className="reviewer__item reviewer__item--name">Иванов Иван Ивановичы</td>
                        <td className="reviewer__item"><Link to="/" className="link">25</Link></td> {/* находятся на рецензии */}
                        <td className="reviewer__item"><Link to="/" className="link">34</Link></td> {/* ожидают повторного рецензирования*/}
                        <td className="reviewer__item"><Link to="/" className="link">80</Link></td> {/* написано рецензий (за все время) */}
                    </tr>
                </tbody>
            </tabel>
        )
    }
}

export default ReviewerComponent;