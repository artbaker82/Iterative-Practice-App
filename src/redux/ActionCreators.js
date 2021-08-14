import { ActionTypes } from "./ActionTypes";

export const addItem = (newPracticeItem) => ({
  type: ActionTypes.ADD_ITEM,
  payLoad: newPracticeItem,
});
