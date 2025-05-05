import { useReducer } from "react";

const initialState = { count: 0 };

interface State {
  count: number;
}

interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Action inconnue");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-amber-50 w-screen h-screen flex flex-col justify-center items-center">
      <p className="p-4 bg-neutral-800 text-white font-bold rounded-md">
        Count: {state.count}
      </p>
      <div className="flex gap-2 mt-2">
        <button
          className="p-2 cursor-pointer w-10 h-10 bg-neutral-800 text-white font-bold rounded-md"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <button
          className="p-2 cursor-pointer w-10 h-10 bg-neutral-800 text-white font-bold rounded-md"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
      </div>
    </div>
  );
}
