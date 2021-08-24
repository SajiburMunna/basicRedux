import { increment, decrement } from "../types";

const initial = {
  counter: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initial, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };

    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
