import { ActionTypes } from "./ActionTypes";
import { PRACTICE_LISTS } from "../assets/PRACTICE_LISTS";

const initialState = {
  lists: PRACTICE_LISTS,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_LIST:
      return {
        ...state,
        lists: state.lists.concat(action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default listReducer;
