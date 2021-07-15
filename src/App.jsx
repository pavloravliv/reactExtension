import './App.css';
import React, { useState } from 'react';
// import SplitView from './components/split-view/split-view';
// import Tree from './components/tree/Tree';
// import MainRouter from './components/Routing/MainRouter';
import MainRouter from './components/Routing/MainRouter';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="App" data-theme={darkMode ? 'dark' : 'light'}>
      <button type="button" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      {/* <SplitView left={<div>left</div>} right={<div>right</div>} /> */}
      <MainRouter />
    </div>
  );
}

export default App;
