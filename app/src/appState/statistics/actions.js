import {
  FETCH_STATISTICS,
  SET_STATISTICS
} from './constants';

export const fetchStatisticsAction = (onFail) => {
  return {
    type: FETCH_STATISTICS,
    onFail
  };
};

export const setStatisticsAction = (statistics) => {
  return {
    type: SET_STATISTICS,
    statistics
  };
};