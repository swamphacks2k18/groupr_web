import React, { Component } from 'react';
import { Field } from 'redux-form';

class FormField extends Component {
  render() {
    const { fieldName, fieldLabel, type } = this.props;
    return (
      <div className="form-row">
        <label htmlFor={fieldName}>{fieldLabel}</label>
        <Field name={fieldName} component="input" type={type} />
      </div>
    );
  }
}

export { FormField };