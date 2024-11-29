import "./App.css";
import Head from "./Components/Head.js";
import Body from "./Components/Body.js";
import { Provider } from "react-redux";
import store from "./Utils/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./Components/WatchPage.js";
import Error from "./Components/Error.js";
import MainContainer from "./Components/MainContainer.js";
import About from "./Components/About.js";
import Shorts from "./Components/Shorts.js";
function App() {
  return (
    <Provider store={store}>
      <>
        <Head />
        <RouterProvider router={myRoute}></RouterProvider>
      </>
    </Provider>
  );
}

export const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
        errorElement: <Error />
      },
      {
        path: "watch",
        element: <WatchPage />,
        errorElement: <Error />
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />
      },
      {
        path: "shorts",
        element: <Shorts />,
        errorElement: <Error />
      }
    ]
  }
]);

export default App;
