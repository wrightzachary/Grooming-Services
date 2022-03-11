import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/navigation';
import Home from './Components/Home/home';
import WhoWeAre from './Components/WhoWeAre/whoWeAre';
import Services from './Components/Services/services';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Home />
      <WhoWeAre />
      <Services />
    </React.Fragment>
  );
}

export default App;
