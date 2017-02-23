import React from 'react';
import { connect } from 'react-redux';

class ChatDisplay extends React.Component {
  render () {
    var msgs = [];

    for (var key in this.props.messages) {
      msgs.push(
        <div className='msg-parent'>
          <div className='msg-time'>{this.timeSince(this.props.messages[key].time)} </div>
          <div className='msg-user'>{this.props.messages[key].username}: </div>
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
    }.bind(this), 1000);
  }
  componentWillUnmount () {
    clearInterval(this.timer);
  }

  // http://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
  timeSince (date) { // make timesince show 'now' or minutes/hours
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + '';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + '';
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' days ago';
    }
    else if (interval >= 1) {
      return interval + ' day ago'
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hrs ago';
    }
    else if (interval >= 1) {
      return interval + ' hr ago'
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' mins ago'
    }
    else if (interval >= 1) {
      return interval + ' min ago'
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
