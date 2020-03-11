import { combineReducers } from 'redux';
import GlobalStore from './globalStore';
import LoginStore from './loginStore';

const AllReducers = combineReducers({
  Global: GlobalStore,
  Login: LoginStore
})

export default AllReducers