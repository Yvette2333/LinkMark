import { all } from 'redux-saga/effects';
import GlobalSaga from './global';

export default function* RootSaga() {
  yield all([
    ...GlobalSaga,
  ])
}