import note from "../utils/note";
import { CREATE_NOTE, UPDATE_NOTE, FETCH_NOTE } from "./types";

export const createNote = (formValues) => async (dispatch, getState) => {
  const resp = await note.post("/new/", { ...formValues });
  dispatch({ type: CREATE_NOTE, payload: resp.data });
};

export const updateNote = (id, formValues) => async (dispatch) => {
  const resp = await note.patch(`/note/${id}`, formValues);
  dispatch({ type: UPDATE_NOTE, payload: resp.data });
};
export const fetchNote = (id) => async (dispatch) => {
  const resp = await note.get(`/notes/${id}`);
  dispatch({ type: FETCH_NOTE, payload: resp.data });
};
