import api from '../../api';
import { takeLeading, put } from '@redux-saga/core/effects';
import { FETCH_SYMBOLS } from './constants';
import { setSymbolsAction } from './actions';

function* fetchSymbols(action) {
  try {
    const resp = yield api.fetchSymbols();
    yield put(setSymbolsAction(resp.data));
  } catch (error) {
    if (action.onFail) action.onFail(error);
    yield put(setSymbolsAction([]));
  }
}

function* watchFetchSymbols() {
  yield takeLeading(FETCH_SYMBOLS, fetchSymbols);
}

export const symbolSagas = [
  watchFetchSymbols()
];
