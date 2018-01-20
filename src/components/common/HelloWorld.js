import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { login } from '../../actions';

class HelloWorld extends Component {
  changeMe = () => {
    console.log('clicked', this.props.name)
    this.props.login();
  };

  render() {
    return (
      <button onClick={this.changeMe} className="App-intro">
        Click to make me say hello.
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  const { name } = state.user;
  return { name };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
  login
}, dispatch);

HelloWorld = connect(mapStateToProps, mapDispatchToProps)(HelloWorld);

export { HelloWorld };