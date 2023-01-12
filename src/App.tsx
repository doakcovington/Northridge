// WDGTR
// NCWH

import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Cartographer } from './components/Cartographer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Northridge
        </h1>
        <span>
          <Cartographer />
        </span>
      </header>
    </div>
  );
}

export default App;
