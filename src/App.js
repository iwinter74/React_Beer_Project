import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './404';
import './App.css'
import Beer from './Beers/Beer';
import BeerList from './Beers/BeerList';
import BeerDetails from './Beers/BeerDetails';
import RandomBeer from './Beers/RandomBeer';
import BeerItem from './Beers/BeerItem';


function App(props) {
  return (
    <Router>
      {props.children}
      <div className="App">
      <BeerItem />
        <Switch>
          <Route path="/" exact>
            <Beer />
          </Route>
          <Route path="/beers" exact>
            <BeerList />
          </Route>
          <Route path="/beers/:id" component={BeerDetails} /> 
          <Route path="/randombeer" exact>
            <RandomBeer />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;

