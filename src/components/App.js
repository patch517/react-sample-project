import './App.styl';

import React from 'react';
import { connect } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import ChatDisplay from './ChatDisplay';
import ChatInput from './ChatInput';

import io from 'socket.io-client';

const socket = io('http://localhost:8081'); // connect to server

class App extends React.Component {
  render () {
    return (
      <div className='app-cmpt'>
        chat display: shows messages
        <ChatDisplay socket={socket} />

        <ChatInput socket={socket} />
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
