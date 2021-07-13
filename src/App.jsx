import './App.css';
import React, { useState } from 'react';
// import MainRouter from './components/MainRouter';
import MainRouter from './components/Routing/MainRouter';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="App" data-theme={darkMode ? 'dark' : 'light'}>
      <button type="button" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <MainRouter />
    </div>
  );
}

export default App;
