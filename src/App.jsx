import './App.css';
import React, { useState } from 'react';
import Index from './components/Index';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="App" data-theme={darkMode ? 'dark' : 'light'}>
      <button type="button" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <Index />
    </div>
  );
}

export default App;
