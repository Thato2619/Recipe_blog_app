
import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from './websitePages/Register';
import Login from './websitePages/Login';
import Write from './websitePages/Write';
import Single from './websitePages/Single';
import Home from './websitePages/Home';
import Navbar from './componets /Navbar';
import Footer from './componets /Footer';


const Layout = () => {
  return(
    //Outlet is a function that is  used in parent route elements to render their child route elements
    <>
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  //this path lead to homepage
  {
    path: "/",
    element: <Layout />,
    children:[

      {
        path: "/home",
        element: <Home />,  //this component represents the content in Home.jsx file
      },

      {
        path: "/single",
        element: <Single />,  //this component represents the content in Single.jsx file
      },

      {
        path: "/write",
        element: <Write />,  //this component represents the content in Write.jsx file
      },
    ]
  },

  //this path leads to login page
  {
    path: "/login",
    element: <Login />,  //this component represents the content in Login .jsx file
  },
  

  //this path leads to registration page
  {
    path: "/register",
    element: <Register />, //this component represents the content in Register.jsx file
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
