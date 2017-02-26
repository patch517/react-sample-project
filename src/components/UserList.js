import './UserList.styl';

import React from 'react';
import { connect } from 'react-redux';

class UserList extends React.Component {
  render () {
    var users = [];

    for (var key in this.props.user) {
      users.push(
        <div key={key}>
          <div>{this.props.user[key].username}</div>
        </div>
      );
    }
    return (
      <div className='user-listWrapper'>
        <h3>Users Online</h3>
        <div className='user-list'>
          <h1>{users}</h1>
        </div>
      </div>
    );
  }
}

UserList.propTypes = {
  user: React.PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    user: state.sample.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
