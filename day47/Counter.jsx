import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
} from "./counterSlice";

function Counter() {

  const count = useSelector(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: "30px" }}>

      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>

    </div>
  );
}

export default Counter;