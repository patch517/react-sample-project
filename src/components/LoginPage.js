import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { socket } from '../network';

class LoginPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {textFieldUsername: ''};
  }
  componentDidMount () {
  }
  sendUsername (event) {
<<<<<<< HEAD
    if (this.state.textFieldUsername.length > 16) {
      alert('Username too long.');
    }
    else if (this.state.textFieldUsername && this.state.textFieldUsername.length <= 16) 
    {
=======
    if (this.state.textFieldUsername && this.state.textFieldUsername.length <= 16) {
>>>>>>> a929f9f7b2a4ef715bf7f89b5f9c5eb01642bd0e
      socket.emit('join', this.state.textFieldUsername);
    }
  }
  }
  onTextFieldChange (event) {
    this.setState({
      textFieldUsername: event.target.value
    });
  }
  handleKeyPress (event) {
    if (event.key === 'Enter') {
      this.sendUsername();
    }
  }
  render () {
    const focusUserTextField = input => {
      input && input.focus();
    }
    return (
      <div className='user-loginWrapper'>
        <div className='user-login'>
          <TextField
            ref={focusUserTextField}
            className='user-login_txtField'
            style={{width: '200px', height: '40px', textAlign: 'center'}}
            inputStyle={{textAlign: 'center', color: 'white'}}
            underlineFocusStyle={{borderColor: '#ffd3a4'}}
            hintText='Enter username'
            hintStyle={{width: '100%', textAlign: 'center', color: 'white'}}
            onChange={this.onTextFieldChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            name = 'user'
            value={this.state.textFieldUsername}
          />
          <FlatButton
            style={{color: 'white'}}
            className='user-login_button'
            label='Go'
            name='userBtn'
            onClick={this.sendUsername.bind(this)}
          />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  router: React.PropTypes.object
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
