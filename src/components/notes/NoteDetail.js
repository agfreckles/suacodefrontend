import React from "react";
import { connect } from "react-redux";
import { fetchNote } from "../../actions";
import withNavigate from "../../utils/history";
import "./../../static/noteslist/note-detail.scss";

class NoteDetail extends React.Component {
  componentDidMount() {
    const { id } = this.props.params;
    this.props.fetchNote(id);
  }
  componentDidUpdate() {
    // this.buildPlayer();
  }
  componentWillUnmount() {
    // this.player.destroy();
  }
  render() {
    if (!this.props.note) {
      return <div> Loading . . . show!! </div>;
    }
    const { title, body } = this.props.note;
    return (
      <div className="note-wrapper">
        <div className="header">
          <h2>{title}</h2>
        </div>
        <div className="p">{body}</div>
        <div className="footer">
          <i className="edit icon"></i>
          <i className="delete icon"></i>
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
