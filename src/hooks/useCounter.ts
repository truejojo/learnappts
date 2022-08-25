import { useReducer } from "react";
import { ICountState, ICountAction } from "../interfaces/interface";
import { COUNTER_ACTIONS } from "../enums/enum";

const counterReducer = (state: ICountState, action: ICountAction) => {
  const { type, payload } = action;
  switch (type) {
    case COUNTER_ACTIONS.INCREMENT:
      return { ...state, count: state.count + payload };
    case COUNTER_ACTIONS.DECREMENT:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

const useCounter = () => {
  const VALUE = 1;
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const increment = () =>
    dispatch({ type: COUNTER_ACTIONS.INCREMENT, payload: VALUE });

  const decrement = () =>
    dispatch({ type: COUNTER_ACTIONS.DECREMENT, payload: VALUE });

  const getCount = () => state.count;

  return { increment, decrement, getCount };
};

export default useCounter;
