import React from "react";
import "../../static/notes.scss";
import ReactTimeAgo from "react-time-ago";
import { capitalizeFirst, truncate } from "../../utils/stringMethods";

const Note = (props) => {
      
  return (
    <div class="ui card">
      <div class="content">
        <div class="header">{capitalizeFirst(props.title)}</div>
        <div class="meta">
          <ReactTimeAgo date={props.created} locale="en-US" />
        </div>
        <div class="description">
          <p>{truncate(props.body)}</p>
        </div>
      </div>
      <div class="extra content">
        <i class="check icon"></i>
        121 Votes
      </div>
    </div>
  );
};
export default Note;
