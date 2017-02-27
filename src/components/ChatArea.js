import './ChatArea.styl';

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
    this.props.socket.off('new message');
    this.props.socket.on('new message', function (newMessages) {
      this.props.addMessages(newMessages);
    }.bind(this));
  }
  onTextFieldChange (event) {
    this.setState({
      textFieldMsg: event.target.value
    });
  }
  handleKeyPress (event) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
  sendMessage (event) {
    if (this.state.textFieldMsg) {
      this.props.socket.emit('send message', this.state.textFieldMsg);
    }
    this.setState({
      textFieldMsg: ''
    });
  }
  render () {
    const focusChatTextField = input => {
      input && input.focus();
    }
    return (
      <div className='chat-area'>
        <TextField ref={focusChatTextField}
          style={{width: '80%', left: '8px'}}
          inputStyle={{color: 'white'}}
          underlineFocusStyle={{borderColor: '#ffd3a4'}}
          hintText=''
          name='msg'
          onChange={this.onTextFieldChange.bind(this)}
          value={this.state.textFieldMsg}
          onKeyPress={this.handleKeyPress.bind(this)} />
        <FlatButton
          style={{width: '15%', left: '30px', top: '4px', color: '#ffd3a4'}}
          name='chatBtn'
          label='Send'
          onClick={this.sendMessage.bind(this)} />
      </div>
    );
  }
}

ChatArea.propTypes = {
  socket: React.PropTypes.object.isRequired,
  addMessages: React.PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessages: (arg) => dispatch(addMessages(arg))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
