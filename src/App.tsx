import "./App.css";
import ReducerCounter from "./Components/CounterWithReducer/ReducerCounter";
import UseStateCounter from "./Components/CounterWithUseState/UseStateCounter";

function App() {
  return (
    <>
      <UseStateCounter />
      <ReducerCounter />
    </>
  );
}

export default App;
