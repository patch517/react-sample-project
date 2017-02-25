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
  onTextFieldChange (event) {
    this.setState({
      textFieldUsername: event.target.value
    });
  }
  render () {
    return (
      <div className='user-login'>
        <TextField style={{'align':'middle', 'backgroundColor':'grey'}}
          hintText='Enter username'
          onChange={this.onTextFieldChange.bind(this)}
          name = 'user'
          value={this.state.textFieldUsername}
        />
        <FlatButton label='Go'
          name='userBtn'
          onClick={this.sendUsername.bind(this)}
        />
      </div>
    );
  }
}

Users.propTypes = {
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
