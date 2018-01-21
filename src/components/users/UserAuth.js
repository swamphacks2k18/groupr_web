import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { GrouprButton, FormField } from '../common';
import { login } from '../../actions';

class UserAuth extends Component {
  handleSubmit = () => {
    const { firstName, email, password } = this.props.userSignupForm;
    this.props.login(firstName, email, password)
  };
  render() {
    return (
      <div className="App-form">
        <FormField fieldName="firstName" fieldLabel="First Name" type="text" />
        <FormField fieldName="email" fieldLabel="Email" type="text" />
        <FormField fieldName="password" fieldLabel="Password" type="password" />
        <GrouprButton text="Create Account" onPress={this.handleSubmit} />
      </div>
    );
  }
}

UserAuth = reduxForm({
  form: 'userSignupForm',
  fields: ['firstName', 'email', 'password'],
})(UserAuth);


const mapStateToProps = (state) => {
  const { userSignupForm } = state.form;
  return {
    userSignupForm
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    login
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);