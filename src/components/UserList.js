import './UserList.styl';

import React from 'react';
import { connect } from 'react-redux';

import { setUsernameList } from '../reducer/sample';

class UserList extends React.Component {
  componentDidMount () {
    this.props.socket.on('update-users', function (users) {
      this.props.setUsernameList(users);
    }.bind(this));
  }
  render () {
    var users = [];

    for (var key in this.props.users) {
      users.push(
        <div key={key}>
          <div><li><span>{this.props.users[key]}</span></li></div>
        </div>
      );
    }
    return (
      <div className='user-listWrapper'>
        <h3>Users Online</h3>
        <div className='user-list'>
          {users}
        </div>
      </div>
    );
  }
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired,
  socket: React.PropTypes.object.isRequired,
  setUsernameList: React.PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    users: state.sample.usernameList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsernameList: (arg) => dispatch(setUsernameList(arg))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
