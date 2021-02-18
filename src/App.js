import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import Search from './components/Search.js';
import Detail from './components/Detail.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
                render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/search"
              exact
                render={(routerProps) => <Search {...routerProps} />}
            />
            <Route
              path="/:pokemon"
              exact
                render={(routerProps) => <Detail {...routerProps} />}
            />
          </Switch>
        </Router>
        
      </div>
    );
  }
}

