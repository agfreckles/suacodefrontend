import React from "react";
import { connect } from "react-redux";
import { deleteNote, fetchNote } from "../../actions";
import Modal from "../../utils/Modal";
import withNavigate from "../../utils/history";
import { Link } from "react-router-dom";

class NoteDelete extends React.Component {
  componentDidMount() {
    console.log(this.props);
    fetchNote(this.props.params.id);
  }
  renderContent() {
    if (!this.props.note) {
      return "Are you sure you want to delete ?";
    }
    return `Are sure you want to delete ${this.props.note.title} ? `;
  }
  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.props.deleteNote(this.props.params.id);
            this.props.navigate("/");
          }}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  render() {
    return (
      <Modal
        title="Note Delete"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => this.props.navigate("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    note: state.notes[ownProps.params.id],
  };
};

export default withNavigate(
  connect(mapStateToProps, {
    fetchNote: fetchNote,
    deleteNote: deleteNote,
  })(NoteDelete)
);
