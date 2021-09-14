import React from 'react';  
import './App.css';
import Login from '../src/Login';
import Info from '../src/Info';

function App() {
  return (
    <div className="App">
      <Info />
      <Login />   
      <div className="direitos">
        <h2>Andrey Luiz - 09/21. ReactJS</h2>
      </div>
    </div>
   
  );
}

export default App;
