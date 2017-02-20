import React from 'react';
import { connect } from 'react-redux';

class ChatDisplay extends React.Component {
  // http://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
  timeSince (date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + ' years';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + ' months';
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' days';
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hours';
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  }
  componentDidMount () {
    this.timer = setInterval(function () {
      this.forceUpdate();
    }.bind(this), 60000);
  }
  componentWillUnmount () {
    clearInterval(this.timer);
  }
  render () {
    var messagesHtml = []; // array of components for each messages

    for (var key in this.props.messages) {
      messagesHtml.push(
        <div className='message-parent'>
          <div className='message-username'>{this.props.messages[key].username}</div>
          <div className='message-time'>{this.timeSince(this.props.messages[key].time)} ago.</div>
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
