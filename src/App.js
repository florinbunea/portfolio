import React from 'react';
import image from './image/background.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="logo" alt="logo" />
        <p>
        Florin Bunea Portfolio !
        </p>
      </header>
    </div>
  );
}

export default App;
