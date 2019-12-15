import React from 'react';
import './style.less';
import LoginComponent from './components/LoginComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import MainComponent from './components/MainComponent.jsx'
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

        <Switch>
          <Route path="/" exact component={MainComponent}/>
          <Route path="/registration" component={RegistrationComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
