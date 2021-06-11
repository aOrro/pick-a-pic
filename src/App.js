import React from 'react';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/NavBar';
import { Collection, Home, Search, User } from 'pages';

import { Container, lightThemeStyles, darkThemeStyles } from './App.styles';

const App = props => {
  const { lightTheme } = props.settings;

  return (
    <ThemeProvider theme={lightTheme ? lightThemeStyles : darkThemeStyles}>
      <Container>
        <Router>
          <NavBar />
          <Switch>
            <Route
              path='/collections/:collectionId/photos'
              exact
              component={Collection}
            ></Route>
            <Route
              path='/collections/:collectionId/related'
              exact
              component={Collection}
            ></Route>
            <Route
              path='/search/photos/:searchTerm'
              exact
              component={Search}
            ></Route>
            <Route
              path='/search/collections/:searchTerm'
              exact
              component={Search}
            ></Route>
            <Route
              path='/search/users/:searchTerm'
              exact
              component={Search}
            ></Route>
            <Route path='/users/:userName' exact component={User}></Route>
            <Route path=''>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

const mapDispatchToProps = state => ({
  settings: state.settings,
});

export default connect(mapDispatchToProps)(App);
