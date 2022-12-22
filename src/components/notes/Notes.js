import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNotes } from "../../actions";
import Note from "./Note";
import "./../../static/noteslist/noteslist.scss";

class Notes extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  renderNotes = () =>
    this.props.notes.map((note) => (
      <Link to={`/notes/edit/${note.id}`} key={note.id} className="link">
        <Note
          id={note?.id}
          title={note?.title}
          created={note?.created}
          updated={note?.updated}
          body={note?.body}
        />
      </Link>
    ));
  render() {
    return (
      <div>
        <div className="wrapper">{this.renderNotes()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    notes: Object.values(state.notes),
  };
};

export default connect(mapStateToProps, { fetchNotes: fetchNotes })(Notes);
