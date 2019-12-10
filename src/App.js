import React from 'react';
import './style.less';
import LoginComponent from './components/LoginComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import { store } from './store'

console.log(store.getState());
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
      <HeaderComponent/>
      {store.getState() == "open" &&
      <LoginComponent/>
      }
    </div>
  );
}

export default App;
