import React from 'react';
import Header from './componets/Header';
import Hero from './componets/Hero';
import SecondPage from './componets/SecondPage';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SecondPage />
    </div>
  );
}

export default App;

