import React, { Component } from 'react';

class GrouprButton extends Component {
    render() {
    const { text, onPress, dark, type } = this.props;
    const className = dark ? "App-primary-btn-dark" : "App-primary-btn"
    return (
      <button type={type} onClick={onPress} className={className} >
      {text}
      </button>
    );
  }
}

export { GrouprButton };
