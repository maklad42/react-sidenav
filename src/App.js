import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import SideNav from './SideNav';

function App(props, state) {

  const [wid, setWid] = useState('0%');

  const openSidenav = () => {
    setWid('25%');
  }

  const closeSidenav = () => {
    setWid('0%');
  }

  return (
    <div className="container">
      <button onClick={openSidenav}>Menu</button>
      <SideNav name="ZaphodB" width={wid} closeNav={closeSidenav}/>
    </div>
  );
}

export default App;
