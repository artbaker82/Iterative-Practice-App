import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
  practiceItems: itemReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
