import { useDispatch, useSelector } from "react-redux";

import { incNumber, decNumber } from "./actions/index";
import Data from "./components/Data";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center" }}>
      <input type="text" value={myState} />
      <button onClick={() => dispatch(incNumber())}>Add (+) </button>
      <button onClick={() => dispatch(decNumber())}>Sub (-) </button>

      <Data></Data>
    </div>
  );
}

export default App;
