// actions.js

import { SET_ERROR, RESET_ERROR } from './actionTypes';

export const setError = (errorMessage) => ({
  type: SET_ERROR,
  payload: errorMessage,
});

export const resetError = () => ({
  type: RESET_ERROR,
});


//New changes