import React from "react";
import { reduxForm, Field } from "redux-form";
import withNavigate from "./../../utils/history";

class NoteForm extends React.Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
    this.props.navigate("/");
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="body"
            component={this.renderInput}
            label="Enter Notes"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Title is required";
  }
  if (!formValues.body) {
    errors.body = "You need to write a note ";
  }
  return errors;
};

export default reduxForm({
  form: "noteForm",
  validate: validate,
})(withNavigate(NoteForm));

