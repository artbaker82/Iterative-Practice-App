import { ActionTypes } from "./ActionTypes";

export const addItem = (newPracticeItem) => ({
  type: ActionTypes.ADD_ITEM,
  payLoad: newPracticeItem,
});

export const selectItem = (updatedItems) => ({
  type: ActionTypes.SELECT_ITEM,
  payload: updatedItems,
});

export const addList = (newList) => ({
  type: ActionTypes.ADD_NEW_LIST,
  payload: newList,
});

export const resetSeleted = (resetItems) => ({
  type: ActionTypes.RESET_SELECTED,
  payload: resetItems,
});

export const increaseTimer = (updatedItems) => ({
  type: ActionTypes.INCREASE_TIMER,
  payload: updatedItems,
});

export const decreaseTimer = (updatedItems) => ({
  type: ActionTypes.DECREASE_TIMER,
  payload: updatedItems,
});
