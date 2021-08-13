import { ActionTypes } from "./ActionTypes";
import { PRACTICEITEMS } from "../assets/PRACTICEITEMS";

const initialState = PRACTICEITEMS;

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      const newPracticeItem = {
        title: action.title,
        created: new Date().toISOString(),
        id: Math.floor(Math.random() * 100),
        liked: false,
        lastPracticed: undefined,
        selected: false,
        timer: 5,
      };
      return {
        ...state,
        newPracticeItem,
      };
    default:
      return {
        ...state,
      };
  }
};

export default itemReducer;
