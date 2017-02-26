import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { socket } from '../network';

class Users extends React.Component {
  constructor (props) {
    super(props);
    this.state = {textFieldUsername: ''};
  }
  componentDidMount () {
  }
  sendUsername (event) {
    if (this.state.textFieldUsername) {
      socket.emit('join', this.state.textFieldUsername);
      this.props.router.push('/chat');
    }
  }
/*  function (err) {
    if (err) {
      console.log(' does not exist');
      socket.emit('my_error');
    }
  }*/
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
    return (
      <div className='user-loginWrapper'>
        <div className='user-login'>
          <TextField className='user-login_txtField'
            style={{width: '200px', height: '40px', textAlign: 'center'}}
            inputStyle={{textAlign: 'center'}}
            hintText='Enter username'
            onChange={this.onTextFieldChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            name = 'user'
            value={this.state.textFieldUsername}
          />
          <FlatButton label='Go'
            name='userBtn'
            onClick={this.sendUsername.bind(this)}
          />
        </div>
      </div>
    );
  }
}

Users.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
