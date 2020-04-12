import React, {Component} from 'react';
import TranslatableText from './TranslatableText';

class SeachComponent extends Component {
    render() {
        return(
            <div className="find header__find">
                <input type="text" className="find__input" placeholder="Введите поисковый запрос"/>
            </div>
        )
    }
}

export default SeachComponent