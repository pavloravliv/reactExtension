import './App.css';
import React, { useState } from 'react';
// import Tree from './components/tree/Tree';
import MainRouter from './components/Routing/MainRouter';
// import MainRouter from './components/Routing/MainRouter';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div data-theme={darkMode ? 'dark' : 'light'}>
      <button type="button" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <MainRouter />
    </div>
  );
}

export default App;
