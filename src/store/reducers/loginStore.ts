import { InitLoginState } from '@/interfaces/store'
import * as Login from '../actions/login'

const initState: InitLoginState = {
   name: 'yuwei233'
}


const LoginStore = (state = initState, actions: any) => {

  const { payload } = actions;
  switch (actions.type) {
    case Login.TEST: {
      return { ...state, ...payload }
    }
    default:
      return { ...state }
  }

}
export default LoginStore