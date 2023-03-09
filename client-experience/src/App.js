
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
    path: "/register",
    element:<Register />,
  },

  //Login Page
  {
    path: "/login",
    element: <Login />,
  }, 

  //Home Page
  {
    path: "/home",
    element: <Home />,
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
