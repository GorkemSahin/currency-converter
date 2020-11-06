import {
  FETCH_SYMBOLS,
  SET_SYMBOLS
} from './constants';

export const fetchSymbolsAction = () => {
  return {
    type: FETCH_SYMBOLS,
  };
};

export const setSymbolsAction = (symbols) => {
  return {
    type: SET_SYMBOLS,
    symbols
  };
};