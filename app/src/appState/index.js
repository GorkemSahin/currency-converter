import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { symbolReducer } from './symbols/reducer';
import { symbolSagas } from './symbols/sagas';
import { statisticsReducer } from './statistics/reducer';
import { statisticsSagas } from './statistics/sagas';

const reducer = combineReducers({
  symbols: symbolReducer,
  statistics: statisticsReducer
});

function* allSagas() {
  yield all([
    ...symbolSagas,
    statisticsSagas
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
export const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(allSagas);