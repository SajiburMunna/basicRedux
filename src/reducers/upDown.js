const intitalState = 0;
const changeTheNumber = (state = intitalState, action) => {
  switch (action.type) {
    case "INCREMENT": //problem
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default changeTheNumber;
