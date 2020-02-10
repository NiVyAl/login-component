import React, { Component } from 'react';

class ArticleComponent extends Component {
    writeFiles(data) {
		let files = [];
		for (let i in data) {
			files.push(i);
		}
		return(
			<div>
				{files.map(fileName => 
                    <li className="more-list__item" key={fileName}>
                        <p className="more-list__text-container"> 
                        <svg class="more-list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m5 2H6v16h12v-9h-7V4z"></path>
                        </svg>
                            <span className="more-list__title">{fileName}</span>
                            <span className="more-list__content"><a href={data[fileName]} className="link" download>Скачать</a></span>
                        </p>
                    </li>		
				)}
			</div>
		)
	}

    render() {
        return(
            <div key={this.props.item.articleId}>
                <h3 className="articles-container__title">{this.props.item.articleName}</h3>
                <p className="articles-container__status"><span className="text-bold">Статус:</span> {this.props.item.articleStatus}</p>
                <a href="/" className="link articles-container__link" download>Скачать</a>
                <p className="articles-container__status articles-container__status--new-line"><span className="text-bold">Авторы:</span> {this.props.item.authors}</p>
                
                
                {this.props.isOpen &&
                    <ul className="more-list articles-container__more-list">
                            <li className="more-list__item">
                                <p>
                                    <span className="more-list__title text-bold">Тип:</span>
                                    <span className="more-list__content">{this.props.item.type}</span>
                                </p>
                            </li>
                            <li className="more-list__item">
                                <p>
                                    <span className="more-list__title text-bold">Авторы:</span>
                                    <span className="more-list__content">{this.props.item.authors}</span>
                                </p>
                            </li>
                            <li className="more-list__item">
                                <p>
                                    <span className="more-list__title text-bold">Running Head:</span>
                                    <span className="more-list__content">{this.props.item.runningHead}</span>
                                </p>
                            </li>
                            
                            <li className="more-list__item">
                                <p>
                                    <span className="more-list__title text-bold">Ключевые слова:</span>
                                    <span className="more-list__content">{this.props.item.keys}</span>
                                </p>
                            </li>

                            <li className="more-list__item">
                                <p>
                                    <span className="more-list__title text-bold">Аннотация:</span>
                                    <span className="more-list__content">{this.props.item.annotation}</span>
                                </p>
                            </li>

                            <ul className="more-list__files-list">
                                {this.writeFiles(this.props.item.pathsMap)}
                            </ul>
                    </ul>
                }
            </div>
        )
    }
}

export default ArticleComponent;