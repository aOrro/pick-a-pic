import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import Search from './pages/Search';
import User from './pages/User';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/search' component={Search}></Route>
        <Route path='/search/:searchTerm' component={Search}></Route>
        <Route path='/users/:userName' component={User}></Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
