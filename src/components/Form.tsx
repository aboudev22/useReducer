import { useReducer } from "react";

type State = {
  name: string;
  email: string;
};

type Action = {
  type: "name" | "email" | "reset";
  payload?: string;
};

const initialeState: State = { name: "", email: "" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload || "" };
    case "email":
      return { ...state, email: action.payload || "" };
    case "reset":
      return { name: "", email: "" };
    default:
      throw new Error("unknom action");
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialeState);
  return (
    <form className="flex w-sm p-5 bg-neutral-600 rounded-2xl flex-col justify-center items-center gap-2">
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
        placeholder="name"
        className="placeholder:text-black/35 text-black font-bold p-2 rounded-md bg-neutral-200"
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
        placeholder="email"
        className="placeholder:text-black/35 text-black font-bold p-2 rounded-md bg-neutral-200"
      />
      <button
        type="button"
        onClick={() => dispatch({ type: "reset" })}
        className="bg-black p-2 rounded-md text-white font-bold cursor-pointer"
      >
        reset
      </button>
    </form>
  );
}
