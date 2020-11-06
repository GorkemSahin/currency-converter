import { createSelector } from 'reselect';

export const statisticsSelector = createSelector(
  (state) => state.statistics,
  (statistics) => statistics
)