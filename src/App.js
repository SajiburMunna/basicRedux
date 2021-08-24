import Counter from "./components/Counter";
import { Provider } from "react-redux";

import { store } from "./redux/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
