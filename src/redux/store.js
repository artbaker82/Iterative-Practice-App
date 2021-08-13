import { createStore, combineReducers } from "redux";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
  practiceItems: itemReducer,
});

export const store = createStore(rootReducer);
