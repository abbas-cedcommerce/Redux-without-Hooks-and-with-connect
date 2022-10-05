import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import { store } from "./redux/store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}
