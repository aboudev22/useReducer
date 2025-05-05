import { useReducer } from "react";

const initialeState = { count: 0 };

interface State {
  count: number;
}

interface Action {
  type: "incremente" | "decremente" | "reset";
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "incremente":
      return { count: state.count + 1 };
    case "decremente":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Action inconnue");
  }
}

export default function Count() {
  const [state, dispatch] = useReducer(reducer, initialeState);
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="w-14 h-14 bg-black rounded-md text-white font-bold flex justify-center items-center">
        {state.count}
      </p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => dispatch({ type: "incremente" })}
          className="bg-black w-10 h-10 rounded-md text-white p-1 cursor-pointer"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decremente" })}
          className="bg-black w-10 h-10 rounded-md text-white p-1 cursor-pointer"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="bg-black w-12 h-10 rounded-md text-white p-1 cursor-pointer"
        >
          reset
        </button>
      </div>
    </div>
  );
}
