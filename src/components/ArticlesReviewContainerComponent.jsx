import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import ArticleEditComponent from './ArticleEditComponent';

class ArticlesReviewContainerComponent extends Component {
	constructor(props){
		super(props);
		
		this.state ={
			open: false,
			scrollY: 0,
			isEditOpen: true,
			articles: {},
		}
	}
	
	componentDidMount() {
		let buttons = document.querySelectorAll(".articles-container__button");
		this.buttons = buttons;
		
		ApiService.getArticles(localStorage.getItem("userId"))
			.then((response) => {
					console.log(response)
			})
	}
	
	open = (e) => {
		if (e.target.id === this.state.open) { //если нажали на меньше информации (скрывается)
			this.setState({open: false});
			e.target.innerHTML = "Больше информации";
			window.scroll(this.state.scrollY, 0);
		} else { // если нажали на больше информации (раскрывается)
			this.setState({open: e.target.id});	
			this.setState({scrollY: window.pageYOffset})
			for (let i = 0; i < this.buttons.length; i++) {
				this.buttons[i].innerHTML = "Больше информации";
			}
			e.target.innerHTML = "Меньше информации";
		}
	}

	editOpen = () => {
		this.setState({isEditOpen: true});
	}
	
	render() {
		return(
			<div className="articles-container">
				{this.state.isEditOpen &&
					<ArticleEditComponent/>
				}
				<h2 className="articles-container__title">Статьи на проверку:</h2>
				<ul className="articles-container__list">
					<li className="articles-container__item">
						<h3 className="articles-container__title">Влияние посещаемости на успевамость</h3>
						{/* <p className="articles-container__status">Находится на проверке</p> */}
						<a href="/" className="link articles-container__link" download>Скачать</a>
						
						{this.state.open == 1 &&
							<ul className="more-list articles-container__more-list">
									<li className="more-list__item">
										<p className="more-list__title">Авторы:</p>
										<p className="more-list__content">Гордеев Фёдор Андреевич, Тетерин Даниил Михайлович, Лаврентьев Евсей Вадимович, Шумейко Виктор Валерьевич</p>
									</li>
									<li className="more-list__item">
										<p className="more-list__title">Running Head:</p>
										<p className="more-list__content">Значимость этих проблем настолько очевидна</p>
									</li>
									
									<li className="more-list__item">
										<p className="more-list__title">Аннотация:</p>
										<p className="more-list__content">Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. С другой стороны постоянный количественный рост и сфера нашей активности играет важную роль в формировании дальнейших направлений развития. Разнообразный и богатый опыт сложившаяся структура организации способствует подготовки и реализации форм развития. Не следует, однако забывать, что рамки и место обучения кадров требуют от нас анализа существенных финансовых и административных условий. Задача организации, в особенности же дальнейшее развитие различных форм деятельности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.</p>
									</li>
									
									<li className="more-list__item">
										<p className="more-list__title">Ключевые слова:</p>
										<p className="more-list__content">Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. Равным образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки новых предложений. Повседневная практика показывает, что укрепление и развитие структуры играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что рамки и место обучения кадров требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же реализация намеченных плановых заданий в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. С другой стороны укрепление и развитие структуры требуют определения и уточнения новых предложений.</p>
									</li>
									
									<li className="more-list__item">
										<p className="more-list__title">Проверка на антиплагиат:</p>
										<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
										{/* <p className="more-list__content"><a href="/" className="link" download>Загрузить измененный файл</a></p> */}
									</li>
									
									<li className="more-list__item">
										<p className="more-list__title">еще какой-то файл:</p>
										<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
									</li>
									
									<li className="more-list__item">
										<p className="more-list__title">pdf файл самой статьи:</p>
										<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
									</li>
									
									<li className="more-list__item">
										<p className="more-list__title">третий файл самой статьи:</p>
										<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
									</li>
							</ul>
						}
						<p className="articles-container__text-button text-button" id="1" onClick={this.open}>Больше информации</p>
						<button className="articles-container__button-edit-status button" onClick={this.editOpen}>Изменить статус</button>
					</li>
					
					
					<li className="articles-container__item">
						<h3 className="articles-container__title">Влияние посещаемости на успевамость</h3>
						<p className="articles-container__status"><span className="text-bold">Статус: </span>Находится на проверке</p>
						{/* <p className="articles-container__status">Не доделана (<a href="/" className="link articles-container__link">продолжить создание</a>)</p> */}
						<a href="/" className="link articles-container__link" download>Скачать</a>
						
						{this.state.open == 2 &&
							<ul className="more-list articles-container__more-list">
									<li className="more-list__item">
										<p className="more-list__title">Running Head</p>
										<p className="more-list__content">Значимость этих проблем настолько очевидна</p>
									</li>
									
									<li className="more-list__item">
										<p className="more-list__title">Аннотация</p>
										<p className="more-list__content">Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. С другой стороны постоянный количественный рост и сфера нашей активности играет важную роль в формировании дальнейших направлений развития. Разнообразный и богатый опыт сложившаяся структура организации способствует подготовки и реализации форм развития. Не следует, однако забывать, что рамки и место обучения кадров требуют от нас анализа существенных финансовых и административных условий. Задача организации, в особенности же дальнейшее развитие различных форм деятельности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.</p>
									</li>
									
									<li className="more-list__item">
										<p className="more-list__title">Ключевые слова</p>
										<p className="more-list__content">Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. Равным образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки новых предложений. Повседневная практика показывает, что укрепление и развитие структуры играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что рамки и место обучения кадров требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же реализация намеченных плановых заданий в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. С другой стороны укрепление и развитие структуры требуют определения и уточнения новых предложений.</p>
									</li>
									
									<li className="more-list__item">
										<p className="more-list__title">проверка на антиплагиат</p>
										<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
									</li>
									
									<li className="more-list__item">
										<p className="more-list__title">еще какой-то файл</p>
										<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
									</li>
									
									<li className="more-list__item">
										<p className="more-list__title">pdf файл самой статьи</p>
										<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
									</li>
									
									<li className="more-list__item">
										<p className="more-list__title">третий файл самой статьи</p>
										<p className="more-list__content"><a href="/" className="link" download>Скачать</a></p>
									</li>
							</ul>
						}
						<button className="articles-container__button button" id="2" onClick={this.open}>Больше информации</button>
					</li>
				</ul>
			</div>
		)
	}
}

export default ArticlesReviewContainerComponent;