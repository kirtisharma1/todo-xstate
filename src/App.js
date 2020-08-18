import React from 'react';
import './App.css';
import { Home } from './components/organisms/Home/Home';
import { Header } from './components/molecules/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
