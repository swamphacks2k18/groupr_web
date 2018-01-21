import React, { Component } from "react";
import { Control, Form } from 'react-redux-form';

class SessionSelection extends Component {
  handleSubmit = (val) => {
    console.log(val)
  };
  render() {
    return (
      <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
        <label>Your name?</label>
        <Control.text model=".name" />
        <button>Create Session</button>
      </Form>
    );
  }
}

export { SessionSelection };