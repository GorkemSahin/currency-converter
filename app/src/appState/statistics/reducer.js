import {
  initialState,
  SET_STATISTICS
} from './constants';

export const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATISTICS:
      return action.statistics;
    default:
      return state;
  }
};