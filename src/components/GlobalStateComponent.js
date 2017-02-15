import React from 'react';
import { connect } from 'react-redux';

import * as sample from '../reducer/sample';

class GlobalStateComponent extends React.Component {
  handleChange (event) {
    this.props.setText(event.target.value);
  }
  render () {
    return (
      <div>
        <input type='text' value={this.props.text} onChange={this.handleChange.bind(this)} />
        <br />
        your text: {this.props.text}
      </div>
    );
  }
}

GlobalStateComponent.propTypes = {
  setText: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    text: state.sample.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setText: (arg) => dispatch(sample.setText(arg))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalStateComponent);
