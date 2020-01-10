import React from 'react';
import './style.less';
import LoginComponent from './components/LoginComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import MainComponent from './components/MainComponent.jsx'
import SubjectsComponent from './components/SubjectsComponent.jsx'
import AddArticle1Component from './components/AddArticle1Component.jsx'
import AddArticle2Component from './components/AddArticle2Component.jsx'
import RegistrationConfirmComponent from './components/RegistrationConfirmComponent.jsx'
import RegistrationComponent from './components/RegistrationComponent.jsx'
import AddUserComponent from './components/AddUserComponent.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <LoginComponent/>
        
        <div className="main">
          <SubjectsComponent/>
          <Switch>
            <Route path="/" exact component={MainComponent}/>
            <Route path="/registration" component={RegistrationComponent}/>
            <Route path="/addUser" component={AddUserComponent}/>
            <Route path="/registrationConfirm" component={RegistrationConfirmComponent}/>
            <Route path="/addArticle/step1" component={AddArticle1Component}/>
            <Route path="/addArticle/step2" component={AddArticle2Component}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
