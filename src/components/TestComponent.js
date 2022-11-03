import { useEffect, useRef, useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "SET_DATA":
      return {
        ...state,
        count: action.payload,
      };
    default:
      throw new Error();
  }
}

const TestComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "SET_DATA", payload: 10 });
        }}
      >
        test
      </button>
    </>
  );
};

export default TestComponent;
