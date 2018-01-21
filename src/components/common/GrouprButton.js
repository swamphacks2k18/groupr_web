import React, { Component } from 'react';

class GrouprButton extends Component {
    render() {
    const { text, onPress, dark} = this.props;
    const className = dark ? "App-primary-btn-dark" : "App-primary-btn"
    return (
      <button onClick={onPress} className={className} >
      {text}
      </button>
    );
  }
}

export { GrouprButton };
