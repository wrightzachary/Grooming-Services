import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/navigation';
import Home from './Components/Home/home';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Home />
    </React.Fragment>
  );
}

export default App;
