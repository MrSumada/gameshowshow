import logo from './logo.svg';
import './App.css';
import React from 'react';

import Question from './components/Question';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>The Game Show Show!</h1>
          <Question />
      </header>
    </div>
  );
}

export default App;
