import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { GrouprButton, FormField } from '../common';
import { sessionCreateServiceCall } from '../../actions';

class SessionCreate extends Component {
  handleSubmit = () => {
    const { name, _class, description } = this.props.sessionCreationForm.values;
    this.props.sessionCreateServiceCall(name, _class, description, () => {
      this.props.history.push('/map');
    });
  };
  render() {
    return (
      <div className="App-form">
        <FormField fieldName="name" fieldLabel="Group Name" type="text" />
        <FormField fieldName="_class" fieldLabel="Class" type="text" />
        <FormField fieldName="description" fieldLabel="Description" type="text" />
        <GrouprButton text="Create Group" onPress={this.handleSubmit} />
      </div>
    );
  }
}

SessionCreate = reduxForm({
  form: 'sessionCreationForm',
  fields: ['name', 'description', '_class'],
})(SessionCreate);


const mapStateToProps = (state) => {
  const { sessionCreationForm } = state.form;
  return {
    sessionCreationForm
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  sessionCreateServiceCall
}, dispatch);

SessionCreate =connect(mapStateToProps, mapDispatchToProps)(SessionCreate);

export { SessionCreate };