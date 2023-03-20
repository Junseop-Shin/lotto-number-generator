import { applyMiddleware, combineReducers, createStore } from "redux";
import { lottoNumberReducer } from "../reducers/lottoNumbers";
import logger from "redux-logger";

const rootReducer = combineReducers({
  numbers: lottoNumberReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
