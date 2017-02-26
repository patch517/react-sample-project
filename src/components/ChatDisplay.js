import './ChatDisplay.styl';

import React from 'react';
import { connect } from 'react-redux';

class ChatDisplay extends React.Component {
  render () {
    var msgs = [];

    for (var key in this.props.messages) {
      msgs.push(
        <div key={key} className='msg-parent'>
          <div className='msg-time'>{this.timeSince(this.props.messages[key].time)} </div>
          <div className='msg-user'>{this.props.messages[key].username}: </div>
          <div className='msg-content'>{this.props.messages[key].content}</div>
        </div>
      );
    }
    return (
      <div id='chat-display'
        className='chat-display'>
        {msgs}
      </div>
    );
  }
  componentDidUpdate (prevProps) {
    if (this.props.messages !== prevProps.messages) {
      var div = document.getElementById('chat-display');
      div.scrollTop = div.scrollHeight - div.clientHeight;
    }
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
  timeSince (date) {
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
    } else if (interval >= 1) {
      return interval + ' day ago'
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hours ago';
    } else if (interval >= 1) {
      return interval + ' hour ago'
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' mins ago'
    } else if (interval >= 1) {
      return interval + ' min ago'
    }
    return 'now';
  }
}

ChatDisplay.propTypes = {
  messages: React.PropTypes.array.isRequired,
  socket: React.PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    messages: state.sample.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatDisplay);
