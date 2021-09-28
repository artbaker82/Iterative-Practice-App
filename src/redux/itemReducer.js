import { ActionTypes } from "./ActionTypes";
import { PRACTICE_ITEMS } from "../assets/PRACTICE_ITEMS";

const initialState = {
  items: PRACTICE_ITEMS,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items: state.items.concat([action.payLoad]),
      };

    case ActionTypes.SELECT_ITEM:
      return {
        ...state,
        items: action.payload,
      };

    case ActionTypes.RESET_SELECTED:
      console.log(action.payload);
      return {
        ...state,
        items: action.payload,
      };

    case ActionTypes.INCREASE_TIMER:
      return {
        ...state,
        items: action.payload,
      };

    case ActionTypes.DECREASE_TIMER:
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
