import './App.styl';

import React from 'react';
import { connect } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import '../network';

class App extends React.Component {
  render () {
    return (
      <div className='app-cmpt'>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object
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
