import {
  initialState,
  SET_SYMBOLS
} from './constants';

export const symbolReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SYMBOLS:
      return action.symbols;
    default:
      return state;
  }
};