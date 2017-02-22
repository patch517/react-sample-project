import './App.styl';

import React from 'react';
import { connect } from 'react-redux';

import ChatArea from './ChatArea';
import ChatDisplay from './ChatDisplay';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import io from 'socket.io-client';

const socket = io('http://localhost:8081');

class App extends React.Component {
  render () {
    return (
      <div className='app-cmpt'>
        <ChatDisplay socket={socket}/>
        <ChatArea socket={socket}/>
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
