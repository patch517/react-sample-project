import './App.styl';

import React from 'react';
import { connect } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {
  render () {
    return (
        <div className='app-cmpt'>
          assfuck
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
