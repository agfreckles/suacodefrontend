import note from "../utils/note";
import { CREATE_NOTE, UPDATE_NOTE, FETCH_NOTE, DELETE_NOTE, FETCH_NOTES } from "./types";

export const createNote = (formValues) => async (dispatch, getState) => {
  const resp = await note.post("/new/", { ...formValues });
  dispatch({ type: CREATE_NOTE, payload: resp.data });
};
export const fetchNotes = () => async (dispatch) => {
  const resp = await note.get("/");
  dispatch({ type: FETCH_NOTES, payload: resp.data });
};
export const updateNote = (id, formValues) => async (dispatch) => {
  const resp = await note.patch(`/edit/${id}`, formValues);
  dispatch({ type: UPDATE_NOTE, payload: resp.data });
};
export const fetchNote = (id) => async (dispatch) => {
  const resp = await note.get(`/notes/${id}`);
  dispatch({ type: FETCH_NOTE, payload: resp.data });
};
export const deleteNote= (id) => async (dispatch) => {
  await note.delete(`/delete/${id}/`);
  dispatch({ type: DELETE_NOTE, payload: id });
};