import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case ("add"): return currentState + 1;
    case ("sub"): return currentState - 1;
    case ("dlt"): return initialState;
    default: return currentState
  }
}
const UseReducerCounter_3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return <div>
    <h1>{count}</h1>
    <button onClick={() => dispatch("add")}>Add</button>
    <button onClick={() => dispatch("sub")}>Sub</button>
    <button onClick={() => dispatch("dlt")}>delete</button>
  </div>;
};

export default UseReducerCounter_3;
