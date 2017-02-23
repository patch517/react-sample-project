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
    return (
      <div className='chat-area'>
        <TextField style={{'width': '80%', 'left': '8px'}} // make pressing enter in textfield click the button
          hintText=''
          name='msg'
          onChange={this.onTextFieldChange.bind(this)}
          value={this.state.textFieldMsg}
          onKeyPress={this.handleKeyPress.bind(this)} />
        <FlatButton style={{'width': '15%', 'left':'30px', 'top':'4px'}}
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
