import { increment, decrement } from "../types";

export const INC = () => {
  return {
    type: increment,
  };
};

export const DEC = () => {
  return {
    type: decrement,
  };
};
