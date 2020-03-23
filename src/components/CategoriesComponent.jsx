import React, { Component } from 'react';
import ApiService from "../service/ApiService";

class CategoriesComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		ApiService.getAllArticles() //404
			.then((response) => {
				console.log(response);
			})
	}
	 

	render() {
		return(
			<div className="main__categories categories">
				<h2 className="categories__title sub-title">Специальности:</h2>
				<ul className="categories__list">
					<li className="categories__item"><a href="/" className="categories__link">неорганическая химия</a></li>
					<li className="categories__item"><a href="/" className="categories__link">высокомолекулярные соединения</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Физическая химия</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Электрохимия</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Высокомолекулярные соединения</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Химия элементоорганических соединений</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Коллоидная химия</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Нефтехимия</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Кинетика и катализ</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Технология электрохимических процессов и защита от коррозии</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Технология и переработка полимеров и композитов</a></li>

					<li className="categories__item"><a href="/" className="categories__link">Органическая химия</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Коллоидная химия</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Нефтехимия</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Математическое моделирование численные методы и комплексы программ</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Технология неорганических веществ</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Технология электрохимических процессов и защита от коррозии</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Технология органических веществ</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Технология и переработка полимеров и композитов</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Химическая технология топлива и высокоэнергетических веществ</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Процессы и аппараты химических технологий</a></li>
					<li className="categories__item"><a href="/" className="categories__link">Технология силикатных и тугоплавких неметаллических материалов</a></li>
				</ul>
				</div>
		)
	}
}

export default CategoriesComponent;