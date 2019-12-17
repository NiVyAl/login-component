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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { store } from './store'

function App() {
  var isOpen;
  if (store.getState() == "open") {
    isOpen = true;
  }
  
  if (store.getState() == "close") {
    isOpen = false;
  }
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <LoginComponent/>
        {/* <SubjectsComponent/> */}

        <Switch>
          <Route path="/" exact component={MainComponent}/>
          <Route path="/registration" component={RegistrationComponent}/>
          <Route path="/registrationConfirm" component={RegistrationConfirmComponent}/>
          <Route path="/addArticle/step1" component={AddArticle1Component}/>
          <Route path="/addArticle/step2" component={AddArticle2Component}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
