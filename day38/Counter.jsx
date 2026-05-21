import { useReducer, useEffect } from "react";

const initialState = {
  count: Number(localStorage.getItem("count")) || 0
};

function reducer(state, action) {

  switch (action.type) {

    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

function Counter() {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("count", state.count);
  }, [state.count]);

  return (
    <div>

      <h1>Counter : {state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

    </div>
  );
}

export default Counter;