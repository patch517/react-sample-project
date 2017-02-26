import React from 'react';
import { connect } from 'react-redux';

import ChatArea from './ChatArea';
import ChatDisplay from './ChatDisplay';
import UserList from './UserList';

import { socket } from '../network';

class ChatPage extends React.Component {
  render () {
    return (
      <div className='chat-page'>
        <ChatDisplay socket={socket}/>
        <UserList socket={socket}/>
        <ChatArea socket={socket}/>
      </div>
    );
  }
}

ChatPage.propTypes = {
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
