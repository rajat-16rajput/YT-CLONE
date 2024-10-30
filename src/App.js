import "./App.css";
import Head from "./Components/Head.js";
import Body from "./Components/Body.js";
import { Provider } from "react-redux";
import store from "./Utils/store.js";
function App() {
  console.log("Component rendered");
  return (
    <Provider store={store}>
      <>
        <Head />
        <Body />
      </>
    </Provider>
  );
}

export default App;
