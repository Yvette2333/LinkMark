import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllReducerState } from '../../interfaces/store';

const useRedux = (ReducerKeys: any[] = ["Global"]) => {

  const Dispatch = useDispatch<any>();
  const StoreState = useRef<any>();
  StoreState.current = useSelector((state: AllReducerState) => ReducerKeys.reduce((prev, cur: keyof AllReducerState) => {
    if (state[cur]) {
      prev[cur] = state[cur]
    }
    return prev
  }, {})
  )

  return {
    Dispatch,
    StoreState: StoreState.current
  }
}

export default useRedux