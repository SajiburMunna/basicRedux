import React from "react";
import { useSelector } from "react-redux";

const Data = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  return (
    <div>
      <h1> hello i am sojib {myState} </h1>
    </div>
  );
};

export default Data;
