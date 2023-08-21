// reducers.js

import { SET_ERROR, RESET_ERROR } from './actionTypes';

const initialState = null; // Initial state can be null or an empty string

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload; // Set the error message
    case RESET_ERROR:
      return initialState; // Reset the error state
    default:
      return state;
  }
};

export default errorReducer;
