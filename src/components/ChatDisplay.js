import React from 'react';
import { connect } from 'react-redux';

class ChatDisplay extends React.Component {
  render () {
    var msgs = [];

    for (var key in this.props.messages) {
      msgs.push(
        <div className='msg-parent'>
          <div className='msg-user' style={{'display': 'inline'}} >{this.props.messages[key].username}: </div>
          <div className='msg-time'>{this.timeSince(this.props.messages[key].time)} ago </div>
          <div className='msg-content'>{this.props.messages[key].content}</div>
        </div>
      );
    }

    return (
      <div className='chat-display'>
        {msgs}
      </div>
    );
  }

  componentDidMount () {
    this.timer = setInterval(function () {
      this.forceUpdate();
    }.bind(this), 60000);
  }

  // http://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
  timeSince (date) { // make timesince show 'now' or minutes/hours + update every minute
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
    return 'now';
  }
}

ChatDisplay.propTypes = {
  messages: React.PropTypes.object.isRequired,
  socket: React.PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    messages: state.sample.messages
  };
};

const mapDispatchToProps = dispatch => {
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatDisplay);
