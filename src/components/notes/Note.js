import React from "react";
import "../../static/notes.scss";
import ReactTimeAgo from "react-time-ago";
import { capitalizeFirst, truncate } from "../../utils/stringMethods";
import { Link } from "react-router-dom";

const Note = (props) => {
  const renderFooter = () => {
    return props.created.ReactTimeAgo !== props.created.ReactTimeAgo ? (
      ""
    ) : (
      <div className="extra content notes-card-footer">
        <Link to={`/notes/edit/${props.id}`}>
          <i className="edit icon"></i>
        </Link>
        <Link to={`/notes/delete/${props.id}`}>
          <i className="delete icon"></i>
        </Link>
        updated
        <ReactTimeAgo date={props.updated} locale="en-US" />
      </div>
    );
  };
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{capitalizeFirst(props.title)}</div>
        <div className="meta">
          <ReactTimeAgo date={props.created} locale="en-US" />
        </div>
        <div className="description">
          <p>{truncate(props.body)}</p>
        </div>
      </div>
      {renderFooter()}
    </div>
  );
};
export default Note;
