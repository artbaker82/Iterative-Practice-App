import { ActionTypes } from "./ActionTypes";

export const addItem = (title) => ({
  type: ActionTypes.ADD_ITEM,
  payLoad: title,
});
