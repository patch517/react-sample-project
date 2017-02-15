import React from 'react';
import { connect } from 'react-redux';

class LocalStateComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  handleChange (event) {
    this.setState({
      text: event.target.value
    });
  }
  render () {
    return (
      <div>
        <input type='text' value={this.state.text} onChange={this.handleChange.bind(this)} />
        <br />
        your text: {this.state.text}
      </div>
    );
  }
}

LocalStateComponent.propTypes = {
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalStateComponent);
