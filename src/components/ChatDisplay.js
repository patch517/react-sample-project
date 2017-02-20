import React from 'react';
import { connect } from 'react-redux';

class ChatDisplay extends React.Component {
  componentDidMount () {

  }
  render () {
    var messagesHtml = []; // array of components for each messages

    for (var key in this.props.messages) {
      messagesHtml.push(
        <div className='message-parent'>
          <div className='message-username'>{this.props.messages[key].username}</div>
          <div className='message-time'>{this.props.messages[key].time}</div>
          <div className='message-content'>{this.props.messages[key].content}</div>
        </div>
      );
    }

    return (
      <div className='chat-display-parent'>
        {messagesHtml}
      </div>
    );
  }
}

ChatDisplay.propTypes = {
  messages: React.PropTypes.object.isRequired,
  socket: React.PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    messages: state.sample.messages // array of text messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatDisplay);
