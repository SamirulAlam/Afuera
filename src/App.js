import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EventPlan from './EventPlan';
import Volunteer from './Volunteer';
import Virtual from './Virtual';
import About from './About';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/volunteer">
            <Volunteer />
          </Route>
          <Route path="/eventPlan">
              <EventPlan />
          </Route>
          <Route path="/virtual">
              <Virtual />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
