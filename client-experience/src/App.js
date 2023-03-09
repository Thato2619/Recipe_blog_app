
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home.jsx';
import Home from '../Pages/Home.js';
import {useNavigate} from 'react-router-dom';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const navigate = useNavigate();

const router = createBrowserRouter([
  //Register page
  {
    path: "/home",
    element:<Home />,
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
