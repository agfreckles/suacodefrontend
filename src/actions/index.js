import note from "../utils/note";
import {
  CREATE_NOTE
} from "./types";

export const createNote = (formValues) => async (dispatch, getState) => {
  const resp = await note.post("/new/", { ...formValues });
  dispatch({ type: CREATE_NOTE, payload: resp.data });
};
