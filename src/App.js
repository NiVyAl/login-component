import React from 'react';
import './style.less';
import LoginComponent from './components/LoginComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'

function App() {
  return (
    <div>
      <HeaderComponent/>
      <LoginComponent/>
    </div>
  );
}

export default App;
