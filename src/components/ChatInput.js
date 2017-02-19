import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { addToMessages } from '../reducer/sample';


class ChatInput extends React.Component {
  componentDidMount () {
    this.props.socket.on('new message', function (msg) {
      // add msg to state
      // TODO: this.props.addToMessages
    });
  }
  render () {
    return (
      <div>
        <TextField
          hintText="Hint Text"
        />
        <FlatButton label="Submit" />
      </div>
    );
  }
}

ChatInput.propTypes = {
  messages: React.PropTypes.object.isRequired,
  socket: React.PropTypes.object.isRequired,
  addToMessages: React.PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    messages: state.sample.messages // array of text messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToMessages: (arg) => dispatch(addToMessages(arg))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
