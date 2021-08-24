import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/types";
const Counter = ({ increment, decrement, count1 }) => {
  return (
    <div>
      <h1>{count1}</h1>
      <button>INC</button>
      <button>DEC</button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  count1: state.CounterReducer.counter,
});
export default connect(mapStateToProps, { increment, decrement })(Counter);
