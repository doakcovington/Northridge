// WDGTR
// NCWH

import React from 'react';
import { Route, Routes } from "react-router-dom"
import logo from './logo.svg';
import './App.css';

import { Game }  from './components/Game'

import { Cartographer } from './components/Cartographer'
import { Northridge } from './components/realms/Northridge';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Northridge
        </h1>
        <span>
          <Game />
        </span>
      </header>
    </div>
  );
}

export default App;
