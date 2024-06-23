import React from 'react';
import Header from './components/Header';
import Survey from './components/Survey';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Survey />
    </div>
  );
};

export default App;
