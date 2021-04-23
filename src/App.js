import React from 'react';
import Home from './components/Home';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ListBeers from './components/ListBeers';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={ListBeers} />
        <Route exact path="/beers/:beerId" component={BeerDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
