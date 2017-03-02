import './App.styl';

import React from 'react';
import { connect } from 'react-redux';

import { socket } from '../network';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {
  componentDidMount () {
    socket.on('goto', function (page) {
      this.props.router.push(page);
    }.bind(this));
  }
  render () {
    return (
      <div className='app-cmpt'>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
  router: React.PropTypes.object.isRequired
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
