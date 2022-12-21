import { CREATE_NOTE } from "../actions/types";
import _ from "lodash";

export const noteReducer = (state = {}, action) => {
  switch (action.type) {
    //   case FETCH_NOTE:
    //     return { ...state, [action.payload.id]: action.payload };
    case CREATE_NOTE:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
