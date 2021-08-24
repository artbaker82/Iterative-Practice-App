import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import itemReducer from "./itemReducer";
import listReducer from "./listReducer";

const rootReducer = combineReducers({
  practiceItems: itemReducer,
  practiceLists: listReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
