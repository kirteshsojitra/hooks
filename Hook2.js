import {useReducer} from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
  }
};

function Hook2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
    </div>
  );
}

export default Hook2;
