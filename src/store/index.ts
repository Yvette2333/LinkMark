import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AllReducers from './reducers/index';
import RootSaga from './sagas';

const SageMiddleware = createSagaMiddleware();
const RootStore = createStore(AllReducers,applyMiddleware(SageMiddleware))
SageMiddleware.run(RootSaga);
// RootStore.subscribe(()=>{})


export default RootStore