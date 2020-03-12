import React from 'react';
import './App.css';
import { Constants } from './constant';
import { TennisGame } from './component/TennisGame';

function App() {
  return (
    <div className="App">
      <h1>{Constants.HEADER}</h1>
      <TennisGame />  
    </div>
  );
}

export default App;
