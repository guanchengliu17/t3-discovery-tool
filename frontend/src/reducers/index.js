import { combineReducers } from "redux";
import {
  goalsByFilters,
  initialState as goalsByFiltersInitialState
} from "../reducers/goals/goals-by-filters";
import {
  pitchesByFilters,
  initialState as pitchesByFiltersInitialState
} from "./pitches/pitches-by-filters";

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

export const initialState = {
  goalsByFilters: goalsByFiltersInitialState,
  pitchesByFilters: pitchesByFiltersInitialState
};
export const appReducer = combineReducers({
  goalsByFilters,

  pitchesByFilters
});

export const rootReducer = (state, action) => {
  // if (action.type === SIGN_OUT_REQUEST || action.type === CHECK_AUTH_FAILURE) {
  //     if (!FOR_LOCALHOST) state = initialState;
  // }
  return appReducer(initialState, action);
};
