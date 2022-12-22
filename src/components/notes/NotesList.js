



import React from "react";
import useFetch from "../../utils/useFetch";
import Note from "./Note";
import "../../static/noteslist/noteslist.scss";
import { Link } from "react-router-dom";

const NotesList = () => {
  const { isLoading, apiError, apiData } = useFetch(
    "GET",
    "https://suacode-production.up.railway.app/api/"
  );
  const renderNotes = () =>
    apiData?.map((note) => (
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
// "http://127.0.0.1:8000/api/",
// "https://suacode-production.up.railway.app/api/"
export default NotesList;
