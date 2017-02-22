import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class ChatArea extends React.Component {
  constructor (props) {
    super(props);
    this.state = {textFieldMsg: ''};
  }
  componentDidMount () {
  }
  onTextFieldChange (event) {
    this.setState({
      textFieldMsg: event.target.value
    });
  }
  render () {
    return (
      <div className='chat-area'>
        <TextField style={{'width': '80%'}}
          hintText='Enter message' name='msg' onChange={this.onTextFieldChange.bind(this)} value={this.state.textFieldMsg}/>
        <FlatButton style={{'width': '20%'}}
          label='Send'/>
      </div>
    );
  }
}

ChatArea.propTypes = {
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
