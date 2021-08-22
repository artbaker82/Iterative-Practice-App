import { ActionTypes } from "./ActionTypes";

export const addItem = (newPracticeItem) => ({
  type: ActionTypes.ADD_ITEM,
  payLoad: newPracticeItem,
});

export const selectItem = (updatedItems) => ({
  type: ActionTypes.SELECT_ITEM,
  payload: updatedItems,
});
