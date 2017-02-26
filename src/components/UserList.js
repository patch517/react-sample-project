import React from 'react';
import { connect } from 'react-redux';

class UserList extends React.Component {
  render () {
    var users = [];

    for (var key in this.props.user) {
      users.push(
        <div key={key}>
          <div className='msg-user'>{this.props.user[key].username}</div>
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
  user: React.PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
