import React from "react";
import useFetch from "../../utils/useFetch";
import Note from "./Note";
import "../../static/noteslist/noteslist.scss";

const NotesList = (props) => {
  const { isLoading, apiError, apiData } = useFetch(
    "GET",
    "https://web-production-082d.up.railway.app/api"
  );
  const renderNotes = () =>
    apiData.map((note) => (
      <div key={note.id}>
        <Note
          title={note.title}
          created={note.created}
          updated={note.updated}
          body={note.body}
        />
      </div>
    ));
  return (
    <>
      {" "}
      {isLoading ? (
        <div>Loading...</div>
      ) : apiError ? (
        <div>Error occured.</div>
      ) : (
        <div className="wrapper">{renderNotes()}</div>
      )}
    </>
  );
};
export default NotesList;
