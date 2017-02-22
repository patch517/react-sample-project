import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { addMessages } from '../reducer/sample';

class ChatArea extends React.Component {
  constructor (props) {
    super(props);
    this.state = {textFieldMsg: ''};
  }
  componentDidMount () {
    this.props.socket.on('new message', function (msg) {
      this.props.addMessages(msg.messages);
    }.bind(this));
  }
  onTextFieldChange (event) {
    this.setState({
      textFieldMsg: event.target.value
    });
  }
  sendMessage (event) {
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
      <div className='chat-area'>
        <TextField style={{'width': '80%'}}
          hintText='' name='msg' onChange={this.onTextFieldChange.bind(this)} value={this.state.textFieldMsg} />
        <FlatButton style={{'width': '20%'}}
          label='Send' onClick={this.sendMessage.bind(this)} />
      </div>
    );
  }
}

ChatArea.propTypes = {
  messages: React.PropTypes.object.isRequired,
  socket: React.PropTypes.object.isRequired,
  addMessages: React.PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    messages: state.sample.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessages: (arg) => dispatch(addMessages(arg))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
