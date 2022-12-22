import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import history from "./../utils/history";
import "./../static/app.scss";
import Header from "./layout/Header";
import NoteCreate from "./notes/NoteCreate";
import NoteDetail from "./notes/NoteDetail";
import NoteUpdate from "./notes/NoteUpdate";
import NoteDelete from "./notes/NoteDelete";
import Notes from "./notes/Notes";

const App = () => {
  return (
    <div className="ui container app-container">
      <BrowserRouter history={history}>
        <Header />
        {/* <NoteCreate /> */}
        <Routes>
          <Route path="/" exact element={<Notes />}></Route>
          <Route path="/notes/new" element={<NoteCreate />}></Route>
          <Route path="/notes/:id" element={<NoteDetail />}></Route>
          <Route path="/notes/edit/:id" element={<NoteUpdate />}></Route>
          <Route path="/notes/delete/:id" element={<NoteDelete />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
