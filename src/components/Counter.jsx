import { useState } from "react";

export default function Counter() {
  const [count, nextCount] = useState(0);
  const [incrementBy, setIncrement] = useState(1);

  function increaseIncrement() {
    setIncrement(incrementBy + 1);
  }

  function handleClick() {
    nextCount(count + incrementBy);
  }

  function decreaseClick() {
    nextCount(count - 1);
  }
  return (
    <div>
      Count Value is :{count}
      <button onClick={handleClick}>Increase</button>{" "}
      <button onClick={decreaseClick}>Decrease</button>
      <h1>We are incrementing the value by {incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase Increment</button>
    </div>
  );
}
