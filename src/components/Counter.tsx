import { useReducer } from "react";

enum COUNTER_ACTIONS {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

interface ICountState {
  count: number;
}

interface ICountAction {
  type: COUNTER_ACTIONS;
  payload: number;
}

interface ICounter {
  initialState: number;
}

const counterReducer = (state: ICountState, action: ICountAction) => {
  const { type, payload } = action;
  switch (type) {
    case COUNTER_ACTIONS.INCREMENT:
      return { ...state, count: state.count - payload };
    case COUNTER_ACTIONS.DECREMENT:
      return { ...state, count: state.count + payload };
    default:
      return state;
  }
};

const Counter: React.FC<ICounter> = ({ initialState }) => {
  const VALUE = 1;
  const [state, dispatch] = useReducer(counterReducer, { count: initialState });
  const { count } = state;

  const increment = () =>
    dispatch({ type: COUNTER_ACTIONS.INCREMENT, payload: VALUE });
  const decrement = () =>
    dispatch({ type: COUNTER_ACTIONS.DECREMENT, payload: VALUE });

  return (
    <section className="counter">
      <button onClick={increment}>-</button>
      <span>{count}</span>
      <button onClick={decrement}>+</button>
    </section>
  );
};

export default Counter;
