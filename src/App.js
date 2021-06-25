import React from 'react';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { NavBar } from 'components';
import { Collection, NotFound, Explore, Home, Search, User } from 'pages';

import { Container, lightThemeStyles, darkThemeStyles } from './App.styles';
import GlobalStyle from './global.styles';

const App = props => {
  const { lightTheme } = props.settings;

  return (
    <ThemeProvider theme={lightTheme ? lightThemeStyles : darkThemeStyles}>
      <Container>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home}></Route>
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
              path='/users/:userName/photos'
              exact
              component={User}
            ></Route>
            <Route
              path='/users/:userName/collections'
              exact
              component={User}
            ></Route>
            <Route path='/explore' exact component={Explore}></Route>
            <Route path='*' component={NotFound}></Route>
          </Switch>
        </Router>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
};

const mapDispatchToProps = state => ({
  settings: state.settings,
});

export default connect(mapDispatchToProps)(App);
