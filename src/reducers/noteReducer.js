import {
  CREATE_NOTE,
  FETCH_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from "../actions/types";
import _ from "lodash";

export const noteReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_NOTE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_NOTE:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_NOTE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_NOTE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
