import {
  FETCH_SYMBOLS,
  SET_SYMBOLS
} from './constants';

export const fetchSymbolsAction = (onFail) => {
  return {
    type: FETCH_SYMBOLS,
    onFail
  };
};

export const setSymbolsAction = (symbols) => {
  return {
    type: SET_SYMBOLS,
    symbols
  };
};