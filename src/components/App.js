import './App.styl';

import React from 'react';
import { connect } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import GlobalStateComponent from './GlobalStateComponent';
import LocalStateComponent from './LocalStateComponent';

class App extends React.Component {
  render () {
    return (
      <div className='app-cmpt'>
        Textfield component using global state:
        <GlobalStateComponent />
        <br /><br /><br />
        Textfield component using local state:
        <LocalStateComponent />
      </div>
    );
  }
}

App.propTypes = {
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
