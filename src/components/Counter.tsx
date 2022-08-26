import useCounter from "../hooks/useCounter";

const Counter: React.FC = () => {
  const { increment, decrement, getCount } = useCounter(10);

  return (
    <section className="counter">
      <button onClick={decrement}>-</button>
      <span>{getCount()}</span>
      <button onClick={increment}>+</button>
    </section>
  );
};

export default Counter;
