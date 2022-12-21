import React from "react";
import "../../static/notes.scss";
import ReactTimeAgo from "react-time-ago";
import { capitalizeFirst, truncate } from "../../utils/stringMethods";

const Note = (props) => {
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
      <div className="extra content">
        updated
        <i className="check icon"></i>
        <ReactTimeAgo date={props.updated} locale="en-US" />
      </div>
    </div>
  );
};
export default Note;
