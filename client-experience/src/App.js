
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  //Register page
  {
    path: "/",
    element: <div>WDFGHJK</div>,
  },

  //Login Page
  {
    path: "/register",
    element: <Register />,
  }, 

  //Home Page
  {
    path: "/login",
    element: <Login />,
  },
]);


function App() {
  return (
    <div>
    <Home />
    <RouterProvider router={router} />
    </div>
  )
   
}

export default App;
