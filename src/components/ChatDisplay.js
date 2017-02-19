import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';


class ChatDisplay extends React.Component {
  render () {
    return (
      <div>
        msgs: {JSON.stringify(this.props.messages)}
      </div>
    );
  }
}

ChatDisplay.propTypes = {
  messages: React.PropTypes.object.isRequired,
  socket: React.PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    messages: state.sample.messages // array of text messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatDisplay);
