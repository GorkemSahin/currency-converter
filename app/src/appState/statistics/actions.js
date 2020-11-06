import {
  FETCH_STATISTICS,
  SET_STATISTICS
} from './constants';

export const fetchStatisticsAction = () => {
  return {
    type: FETCH_STATISTICS,
  };
};

export const setStatisticsAction = (symbols) => {
  return {
    type: SET_STATISTICS,
    symbols
  };
};