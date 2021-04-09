import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function About() {
  return <h2>Search</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function MyProfile() {
  return <h2>My profile</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/my-profile'>My profile</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/search'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/my-profile'>
            <MyProfile />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
