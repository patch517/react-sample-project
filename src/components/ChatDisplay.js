import React from 'react';
import { connect } from 'react-redux';

class ChatDisplay extends React.Component {
  render () {
    return (
      <div className='chat-display'/>
    );
  }
}

ChatDisplay.propTypes = {
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatDisplay);
