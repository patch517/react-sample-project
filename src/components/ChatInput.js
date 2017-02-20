import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { addToMessages } from '../reducer/sample';

class ChatInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      textFieldMsg: ''
    }; // initialize state
  }
  componentDidMount () {
    this.props.socket.on('new message', function (msg) {
      this.props.addToMessages(msg.messages);
      // add msg to state
      // TODO: this.props.addToMessages
    }.bind(this));
  }
  onTextFieldChange (event) {
    this.setState({
      textFieldMsg: event.target.value
    });
  }
  sendMessageToServer (event) {
    this.props.socket.emit('send message', {
      room: 'main',
      rawMessage: this.state.textFieldMsg
    });
    this.setState({
      textFieldMsg: ''
    });
  }
  render () {
    return (
      <div>
        <TextField
          hintText='' name='msg' onChange={this.onTextFieldChange.bind(this)} value={this.state.textFieldMsg}/>
        <FlatButton label='Submit' onClick={this.sendMessageToServer.bind(this)} />
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
