import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './components/Home';
import Navigation from './components/Navigation';
import User from './components/User';

const GlobalStyle = createGlobalStyle`
  body{
    margin:0
  }
`

const App = () => {

    return (
      <>
        <GlobalStyle/>
        <Navigation></Navigation>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/contact" component={User} />
          {/* <Route path="/User" sensitive component={User} /> */}
          {/* <Route path="/user/" strict component={User} /> */}
        </Router>
      </>
    )
}

export default App;