
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './websitePages/Register';
import Login from './websitePages/Login';
import Write from './websitePages/Write';
import Single from './websitePages/Single';
import Home from './websitePages/Home';
import Navbar from './componets /Navbar';
import Footer from './componets /Footer';

const router = createBrowserRouter([
  //this path lead to homepage
  {
    path: "/",
    element: <div>Hello world!</div>,
  },

  //this path leads to login page
  {
    path: "/login",
    element: <Login />,
  },

  //this path leads to registration page
  {
    path: "/register",
    element: <Register />,
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
