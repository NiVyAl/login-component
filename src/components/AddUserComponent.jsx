import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputComponent from "../components/service/InputComponent";
import SelectInputComponent from "../components/service/SelectInputComponent";
import FormControlComponent from "../components/service/FormControlComponent";
import checkAccessibility from '../service/checkAccessibility';
import ErrorPopupComponent from './service/ErrorPopupComponent';

/**
 * Страница создания пользователя администрацией.
 */
class AddUserComponent extends Component{

    constructor(props){
        super(props);

        this.selectData = ApiService.ArticlesCategories;;
        this.selectDataRole = [{id: "ROLE_ROOT", text: "Администратор"}, {id: "ROLE_ADMIN", text: "Секретарь"}, {id: "ROLE_REVIEWER", text: "Рецензент"}, {id: "ROLE_AUTHOR", text: "Автор"}];
        
        this.roles = ["ROLE_ROOT", "ROLE_ADMIN", "ROLE_REVIEWER", "ROLE_AUTHOR"];
        this.rolesNames = ["Root", "Секретарь", "Рецензент", "Автор"];
        this.window = React.createRef(); 
		  
        this.state = {
            isReviewer: false,
            email: '',
            password: '',
            nameR: '',
            surnameR: '',
            middleNameR: '',
            name: '',
            surname: '',
            country: '',
            university: '',
            city: '',
            phone: '',
        }
    }

    componentDidMount() {
        if (!checkAccessibility(["ADD_PRIVILEGE"]))
            window.location.href="/";
    }

    saveUser = (data) => {
        this.window.current.classList.add("load");
        console.log(data)
        ApiService.addUser(data)
            .then(res => {
                console.log(res);
                window.location.href="/";					
            })
            .catch(err => {
                this.setState({showErrorPopup: true});
            })
            .finally(() => {
                this.window.current.classList.remove("load");
            })
    }

    handleChange = (name, id, formHandleChange) => {
        console.log(name, id);
        formHandleChange(name, id);
        if (id === "ROLE_REVIEWER") {
            this.setState({isNeedSubject: true})
        } else {
            this.setState({isNeedSubject: false})
        }
    }

    /**
     * Метод закрытия модального окна ошибки
     */
     handleClosePopup = () => {
        this.setState({ showErrorPopup: false });
    }

    render() {
        return(
            <div ref={this.window} className="registration window">
                <h2 className="sub-title window__title">Создать пользователя</h2>
                <FormControlComponent onSubmit={data => this.saveUser(data)} render={
                        handleChange => (
                            <React.Fragment>
                                <InputComponent text="Имя" name="nameR" handleChange={handleChange} type="name" maxLength="20"/> {/*name это еще и id*/}
                                <InputComponent text="Фамилия" name="surnameR" handleChange={handleChange} type="name" maxLength="20"/>
                                <InputComponent text="Отчество" name="middleNameR" handleChange={handleChange} type="name" maxLength="20"/>
                                <InputComponent text="Имя (латиницей)" name="name" handleChange={handleChange} type="name" maxLength="20" required/>
                                <InputComponent text="фамилия (латиницей)" name="surname" handleChange={handleChange} type="name" maxLength="20" required/>
                                <InputComponent text="Страна" name="country" handleChange={handleChange} type="text" maxLength="20" required/>
                                <InputComponent text="Город" name="city" handleChange={handleChange} type="text" maxLength="20" required/>
                                <InputComponent text="Организация" name="organization" handleChange={handleChange} type="text" maxLength="30"/>
                                <InputComponent text="Телефон" name="phone" handleChange={handleChange} type="tel" maxLength="30" required/>
                                <InputComponent text="email" name="email" handleChange={handleChange} type="email" maxLength="30" required/>
                                <InputComponent text="Логин" name="login" handleChange={handleChange} type="text" maxLength="30" required/>
                                <InputComponent text="Пароль" name="password" handleChange={handleChange} type="password" maxLength="20" autoComplete="new-password" required/>

                                <SelectInputComponent title="Роль пользователя:" id="role" handleChange={(name, id) => this.handleChange(name, id, handleChange)} data={this.selectDataRole} isRequired={true}/>
                                {this.state.isNeedSubject &&
                                    <SelectInputComponent title="Предмет рецензента:" id="subject" handleChange={handleChange} data={this.selectData} isRequired={true}/>
                                }
                                <button className="button window__button" type="submit">Создать пользователя</button>
                            </React.Fragment>
                        )
                }/>
                <ErrorPopupComponent isOpen={this.state.showErrorPopup} onClose={this.handleClosePopup} />
            </div>
        );
    }
}

export default AddUserComponent;