
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },

  {
    path: "/login",
    element: <div>Hellooooooo!</div>,
  },

  {
    path: "/register",
    element: <div>yassssssssss!</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider  router={router}/>
    </div>
  );
}

export default App;
