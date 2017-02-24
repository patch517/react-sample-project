import React from 'react';

import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import App from './App';

import Users from './Users';
import ChatPage from './ChatPage';

class RoutesComponent extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRedirect to='/chat' />
          <Route path='login' component={Users} />
          <Route path='chat' component={ChatPage} />
        </Route>
      </Router>
    );
  }
}

RoutesComponent.propTypes = {
};

export default RoutesComponent;
