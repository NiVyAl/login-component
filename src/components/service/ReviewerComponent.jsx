import React, { Component } from 'react';

class ReviewerComponent extends Component {
    render() {
        return(
            <tabel className="reviewer-container">
                <thead>
                    <tr class="reviewer-container__tr reviewer-container__tr--description">
                        <td className="reviewer__item reviewer__item--name">ФИО Рецензента</td>
                        <td className="reviewer__item reviewer__item--description"><span className="one-line">находятся на</span> рецензии</td> {/* находятся на рецензии */}
                        <td className="reviewer__item reviewer__item--description">ожидают повторного рецензирования</td> {/* ожидают повторного рецензирования*/}
                        <td className="reviewer__item reviewer__item--description">написано рецензий <span className="one-line">(за все время)</span></td> {/* написано рецензий (за все время) */}
                    </tr>
                </thead>

                <tbody>
                    {/* Тут цикл */}
                    <tr className="reviewer-container__tr">
                        <td className="reviewer__item reviewer__item--name">Алексей Федорович Алексенко</td>
                        <td className="reviewer__item"><a href="/" class="link">10</a></td> {/* находятся на рецензии */}
                        <td className="reviewer__item"><a href="/" class="link">50</a></td> {/* ожидают повторного рецензирования*/}
                        <td className="reviewer__item"><a href="/" class="link">3</a></td> {/* написано рецензий (за все время) */}
                    </tr>

                    <tr className="reviewer-container__tr">
                        <td className="reviewer__item reviewer__item--name">Алексей Федорович Алексенко-Понасенко</td>
                        <td className="reviewer__item"><a href="/" class="link">25</a></td> {/* находятся на рецензии */}
                        <td className="reviewer__item"><a href="/" class="link">34</a></td> {/* ожидают повторного рецензирования*/}
                        <td className="reviewer__item"><a href="/" class="link">80</a></td> {/* написано рецензий (за все время) */}
                    </tr>
                </tbody>
            </tabel>
        )
    }
}

export default ReviewerComponent;