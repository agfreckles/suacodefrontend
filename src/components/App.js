import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import history from "./../utils/history";
import "./../static/app.scss";
import Header from "./layout/Header";
import NoteCreate from "./notes/NoteCreate";
import NotesList from "./notes/NotesList";
import NoteDetail from "./notes/NoteDetail";

const App = () => {
  return (
    <div className="ui container app-container">
      <BrowserRouter history={history}>
        <Header />
        {/* <NoteCreate /> */}
        <Routes>
          <Route path="/" exact element={<NotesList />}></Route>
          <Route path="/notes/new" element={<NoteCreate />}></Route>
          <Route path="/notes/:id" element={<NoteDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
