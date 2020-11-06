import api from '../../api';
import { takeLeading, put } from '@redux-saga/core/effects';
import { FETCH_STATISTICS } from './constants';
import { setStatisticsAction } from './actions';

function* fetchStatistics(action) {
  try {
    const resp = yield api.fetchStatistics();
    yield put(setStatisticsAction(resp.data));
  } catch (e) {
    yield put(setStatisticsAction([]));
  }
}

function* watchFetchStatistics() {
  yield takeLeading(FETCH_STATISTICS, fetchStatistics);
}

export const symbolSagas = [
  watchFetchStatistics()
];
