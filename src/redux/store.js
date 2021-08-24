import { createStore } from "redux";

import rootCombine from "./reducers";

const initalState = {};

export const store = createStore(rootCombine, initalState);
