import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import About from './pages/about/about';
import SignIn from './pages/signin/signin';

import './App.css';
import Navbar from './layout/navbar/navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/signin' component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
