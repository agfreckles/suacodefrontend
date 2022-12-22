import {
  CREATE_NOTE,
  FETCH_NOTE,
  FETCH_NOTES,
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
    case FETCH_NOTES:
        return { ...state, ..._.mapKeys(action.payload, 'id')};
    case DELETE_NOTE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
