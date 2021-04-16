import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import TranslatableText from "./service/TranslatableText";
import {Link} from 'react-router-dom';

class CategoriesComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allCategories: [],
		}
	}

	componentDidMount() {
		ApiService.getAllCategories() //404
			.then((response) => {
				this.setState({allCategories: response.data})
			})
			.catch((error) => {
				if (error.response.status == 401) {
					ApiService.logOut();
				}
			})
	}
	 

	render() {
		return(
			<div className="main__categories categories">
				<h2 className="categories__title sub-title"><TranslatableText 
                text={{
                  ru: "Специальности:",
                  en: "Сategories:",
                }}/></h2>
				<ul className="categories__list">
				{this.state.allCategories.map(item => 
					<li className="categories__item" key={item.id}>
						<Link to="/" className="categories__link">{item.name}</Link>
					</li>
				)}
					{/* <li className="categories__item"><Link to="/" className="categories__link">неорганическая химия</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">высокомолекулярные соединения</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Физическая химия</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Электрохимия</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Высокомолекулярные соединения</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Химия элементоорганических соединений</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Коллоидная химия</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Нефтехимия</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Кинетика и катализ</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Технология электрохимических процессов и защита от коррозии</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Технология и переработка полимеров и композитов</Link></li>

					<li className="categories__item"><Link to="/" className="categories__link">Органическая химия</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Коллоидная химия</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Нефтехимия</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Математическое моделирование численные методы и комплексы программ</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Технология неорганических веществ</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Технология электрохимических процессов и защита от коррозии</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Технология органических веществ</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Технология и переработка полимеров и композитов</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Химическая технология топлива и высокоэнергетических веществ</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Процессы и аппараты химических технологий</Link></li>
					<li className="categories__item"><Link to="/" className="categories__link">Технология силикатных и тугоплавких неметаллических материалов</Link></li> */}
				</ul>
				</div>
		)
	}
}

export default CategoriesComponent;