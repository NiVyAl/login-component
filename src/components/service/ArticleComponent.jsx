import React, { Component } from 'react';
import TranslatableText from "./TranslatableText";
import ApiService from "../../service/ApiService";

/**
 * Отображение одной статьи в списке статей.
 */
class ArticleComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moreOpen: false
        }
    }
    writeFiles(data) {
		return(
            <React.Fragment>
                {data &&
                    <div>
                        {data.map(file =>  
                            <li className="more-list__item" key={file.fileName}>
                                <p className="more-list__text-container more-list__text-container--file"> 
                                    <svg className="more-list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m5 2H6v16h12v-9h-7V4z"></path>
                                    </svg>
                                    <span className="more-list__title">{file.fileName}</span>
                                    <span className="more-list__content link"><a href={ApiService.baseUrl + "/files/get?id=" + file.id} className="link" download>скачать</a></span>
                                </p>
                            </li>		
                        )}
                    </div>
                }
            </React.Fragment>
		)
    }
    
    openMore = () => {
        this.setState({moreOpen: !this.state.moreOpen})
    }

    render() {
        return(
            <React.Fragment key={this.props.item.articleId}>
                <h3 className="articles-container__title">{this.props.item.articleName}</h3>
                <p className="articles-container__status">
                    <span className="text-bold"><TranslatableText 
                        text={{
                        ru: "Статус: ",
                        en: "Status: ",
                        }}/>
                    </span> 
                    {ApiService.getArticleStatusString(this.props.item.verdict)}
                </p>
                <a href="/" className="link articles-container__link" download><TranslatableText 
                    text={{
                    ru: "Скачать",
                    en: "Download",
                    }}/>
                </a>
                <p className="articles-container__status articles-container__status--new-line">
                    <span className="text-bold more-list__title"><TranslatableText 
                        text={{
                        ru: "Авторы:",
                        en: "Authors:",
                        }}/>
                    </span> 
                    {this.props.item.authors}
                </p>
                
                
                {this.state.moreOpen &&
                    <ul className="more-list articles-container__more-list">
                            <li className="more-list__item">
                                <p className="more-list__text-container">
                                    <span className="more-list__title text-bold"><TranslatableText 
                                        text={{
                                        ru: "Тип:",
                                        en: "Type",
                                        }}/>
                                    </span>
                                    <span className="more-list__content">{this.props.item.type}</span>
                                </p>
                            </li>
                            <li className="more-list__item">
                                <p className="more-list__text-container">
                                    <span className="more-list__title text-bold">Running Head:</span>
                                    <span className="more-list__content">{this.props.item.runningHead}</span>
                                </p>
                            </li>
                            
                            <li className="more-list__item">
                                <p className="more-list__text-container">
                                    <span className="more-list__title text-bold">  
                                        <TranslatableText 
                                        text={{
                                        ru: "Ключевые слова:",
                                        en: "Keywords",
                                        }}/>
                                    </span>
                                    <span className="more-list__content">{this.props.item.keys}</span>
                                </p>
                            </li>

                            <li className="more-list__item">
                                <p className="more-list__text-container">
                                    <span className="more-list__title text-bold"><TranslatableText 
                                        text={{
                                        ru: "Аннотация:",
                                        en: "Annotations:",
                                        }}/>
                                    </span>
                                    <span className="more-list__content">{this.props.item.annotation}</span>
                                </p>
                            </li>

                            <ul className="more-list__files-list">
                                {this.writeFiles(this.props.item.files)}
                            </ul>
                    </ul>
                }
                <p className="articles-container__text-button text-button" onClick={this.openMore}>
                    {this.state.moreOpen &&
                        <span><TranslatableText 
                            text={{
                            ru: "Меньше информации",
                            en: "Less information",
                            }}/>
                        </span>
                    }
                    {!this.state.moreOpen &&
                        <span><TranslatableText 
                            text={{
                            ru: "Больше информации",
                            en: "More information",
                            }}/>
                        </span>
                    }
                    
                </p>
            </React.Fragment>
        )
    }
}

export default ArticleComponent;