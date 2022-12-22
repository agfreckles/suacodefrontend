import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNote } from "../../actions";
import withNavigate from "../../utils/history";
import "./../../static/noteslist/note-detail.scss";

class NoteDetail extends React.Component {
  componentDidMount() {
    const { id } = this.props.params;
    this.props.fetchNote(id);
  }
  render() {
    if (!this.props.note) {
      return <div> Loading . . . notes...!! </div>;
    }
    const { title, body } = this.props.note;
    return (
      <div className="note-wrapper">
        <div className="header">
          <h2>{title}</h2>
        </div>
        <div className="p">{body}</div>
        <div className="footer">
          <Link to={`/notes/edit/${this.props.note.id}`}>
            <i className="edit icon"></i>
          </Link>
          <Link to={`/notes/delete/${this.props.note.id}`}>
            <i className="delete icon"></i>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { note: state.notes[ownProps.params.id] };
};
export default withNavigate(
  connect(mapStateToProps, { fetchNote })(NoteDetail)
);
