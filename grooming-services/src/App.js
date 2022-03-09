import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/navigation';
import Home from './Components/Home/home';
import WhoWeAre from './Components/WhoWeAre/whoWeAre';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Home />
      <WhoWeAre />
    </React.Fragment>
  );
}

export default App;
