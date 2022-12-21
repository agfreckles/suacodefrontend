import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchNote, updateNote } from "../../actions";
import withNavigate from "../../history";
import NoteForm from "./NoteForm";

class NoteEdit extends React.Component {
  componentDidMount() {
    // console.log(this.props.params.id);
    this.props.fetchNote(this.props.params.id);
  }
  onSubmit = (formValues) => {
    this.props.updateNote(this.props.params.id, formValues);
  };
  render() {
    // const { id } = this.props.params;
    return (
      <div>
        <h3>Edit Note</h3>
        <NoteForm
          onSubmit={this.onSubmit}
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
    editNote: updateNote,
  })(NoteEdit)
);
