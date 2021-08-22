import { ActionTypes } from "./ActionTypes";
import { PRACTICE_ITEMS } from "../assets/PRACTICE_ITEMS";

const initialState = {
  items: PRACTICE_ITEMS,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      console.log(action.payLoad);
      return {
        ...state,
        items: state.items.concat([action.payLoad]),
      };

    case ActionTypes.SELECT_ITEM:
      console.log(action.payload);
      console.log(state.items);
      return {
        ...state,
        items: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default itemReducer;
