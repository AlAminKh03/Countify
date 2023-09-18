import { useState } from "react";
import { CounterType } from "./CounterTypes";

const UseStateCounter = () => {
  const initialState = {
    incrementOne: 1,
    decrementTwo: 0,
    incrementFive: 0,
    decrementFive: 0,
  };
  const [counter, setCounter] = useState<CounterType>(initialState);

  const handleIncrement = () => {
    setCounter((prevState) => {
      return {
        ...prevState,
        incrementOne: prevState.incrementOne + 1,
      };
    });
  };
  const handleDecrement2 = () => {
    setCounter((prevState) => {
      return {
        ...prevState,
        decrementTwo: prevState.decrementTwo - 2,
      };
    });
  };
  const handleIncrementFive = () => {
    setCounter((prevState) => {
      return {
        ...prevState,
        incrementFive: prevState.incrementFive + 5,
      };
    });
  };
  const handleIncrementThree = () => {
    setCounter((prevState) => {
      return {
        ...prevState,
        decrementFive: prevState.decrementFive - 5,
      };
    });
  };
  return (
    <div>
      <p>{counter.incrementOne}</p>
      <p>{counter.decrementTwo}</p>
      <p>{counter.incrementFive}</p>
      <p>{counter.decrementFive}</p>
      <button
        className={
          "bg-green-500 p-2 border border-green-800 disabled:bg-gray-500"
        }
        onClick={handleIncrement}
        disabled={counter.incrementOne <= 0}
      >
        Increment 1
      </button>
      <button
        className="bg-green-500 p-2 border border-green-800"
        onClick={handleDecrement2}
      >
        Decrease by 2
      </button>
      <button
        className="bg-green-500 p-2 border border-green-800"
        onClick={handleIncrementFive}
      >
        Increase by 5
      </button>
      <button
        className="bg-green-500 p-2 border border-green-800"
        onClick={handleIncrementThree}
      >
        Decrement by 3
      </button>
    </div>
  );
};

export default UseStateCounter;
