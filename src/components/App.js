import './App.styl';

import React from 'react';
import { connect } from 'react-redux';

import ChatDisplay from './ChatDisplay';


import injectTapEventPlugin from 'react-tap-event-plugin';

import io from 'socket.io-client';

injectTapEventPlugin();

class App extends React.Component {
  render () {
    return (
        <div className='app-cmpt'>
          ass
          
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
