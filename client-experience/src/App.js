
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  //this path lead to homepage
  {
    path: "/",
    element: <div>Hello world!</div>,
  },

  //this path leads to login page
  {
    path: "/login",
    element: <div>Hellooooooo!</div>,
  },

  //this path leads to registration page
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
