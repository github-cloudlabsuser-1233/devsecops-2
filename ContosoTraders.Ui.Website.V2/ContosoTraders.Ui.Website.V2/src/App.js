import React from 'react';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Contoso Traders</h1>
      </header>
      <div className="container">
        <AboutUs />
      </div>
    </div>
  );
}

export default App;