import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchNote, updateNote } from "../../actions";
import withNavigate from "../../utils/history";
import NoteForm from "./NoteForm";

class NoteUpdate extends React.Component {
  componentDidMount() {
    this.props.fetchNote(this.props.params.id);
  }
  onSubmit = (formValues) => {
    this.props.updateNote(this.props.params.id, formValues);
  };
  handleChange = (formValues) => {
    this.props.updateNote(this.props.params.id, formValues);
  };
  render() {
    // const { id } = this.props.params;
    return (
      <div>
        <h3>Edit Note</h3>
        <NoteForm
          onSubmit={this.onSubmit}
          onChange={this.handleChange}
          initialValues={_.pick(this.props.note, "title", "body")} //Special: initialValues is provided by redux form
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { note: state.notes[ownProps.params.id] };
};

export default withNavigate(
  connect(mapStateToProps, {
    fetchNote: fetchNote,
    updateNote: updateNote,
  })(NoteUpdate)
);
