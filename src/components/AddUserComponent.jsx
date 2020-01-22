import React, { Component } from 'react';
import ApiService from "../service/ApiService";
import InputComponent from "../components/InputComponent";
import SelectInputComponent from "../components/SelectInputComponent";

class AddUserComponent extends Component{

    constructor(props){
        super(props);
        
        this.roles = ["ROLE_ROOT", "ROLE_ADMIN", "ROLE_REVIEWER", "ROLE_AUTHOR"];
        this.rolesNames = ["Root", "Admin", "Reviewer", "Author"];
        this.window = React.createRef(); 
		  
        this.state ={
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
            role: this.roles[0],
        }
    }

    saveUser = (e) => {
        e.preventDefault();
        this.window.current.classList.add("load");
        let user = {};
        for (let i in this.state) {    
            if ((this.state[i] !== "") && (i !== "message")) {
                user[i] = this.state[i]
            }
        };
        console.log(user);
        ApiService.addUser(user)
            .then(res => {
               //  this.setState({message : 'User added successfully.'});
					//  this.props.history.push('/users');
					
            });
    }

    handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return(
            <div ref={this.window} className="registration window">
                <h2 className="sub-title window__title">Создать пользователя</h2>
                <form onSubmit={this.saveUser}>
                    <InputComponent text="Имя" name="nameR" handleChange={this.handleChange} type="name" maxLength="20"/> {/*name это еще и id*/}
                    <InputComponent text="Фамилия" name="surnameR" handleChange={this.handleChange} type="name" maxLength="20"/>
                    <InputComponent text="Отчество" name="middleNameR" handleChange={this.handleChange} type="name" maxLength="20"/>
                    <InputComponent text="Имя (латиницей)" name="name" handleChange={this.handleChange} type="name" maxLength="20" required/>
                    <InputComponent text="фамилия (латиницей)" name="surname" handleChange={this.handleChange} type="name" maxLength="20" required/>
                    <InputComponent text="Страна" name="country" handleChange={this.handleChange} type="text" maxLength="20" required/>
                    <InputComponent text="Город" name="city" handleChange={this.handleChange} type="text" maxLength="20" required/>
                    <InputComponent text="Организация" name="organization" handleChange={this.handleChange} type="text" maxLength="30"/>
                    <InputComponent text="Телефон" name="phone" handleChange={this.handleChange} type="tel" maxLength="30" required/>
                    <InputComponent text="email" name="email" handleChange={this.handleChange} type="email" maxLength="30" required/>
                    <InputComponent text="Пароль" name="password" handleChange={this.handleChange} type="password" maxLength="20" autoComplete="new-password" required/>

						  <SelectInputComponent title="Роль пользователя:" id="role" change={this.handleChange} values={this.roles} texts={this.rolesNames}/>

                    <button className="button window__button" type="submit">Создать пользователя</button>
                </form>
            </div>
        );
    }
}

export default AddUserComponent;