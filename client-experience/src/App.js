
import './App.css';
import styled from 'styled-components';
//import {
  //createBrowserRouter,
  //Outlet,
  //RouterProvider,
//} from "react-router-dom";
import Register from './websitePages/register/Register';
import Login from './websitePages/login/Login';
import Write from './websitePages/write/Write';
import Single from './websitePages/single/Single';
import Home from './websitePages/home/Home';
import Navbar from './componets /navbar/Navbar';
import Footer from './componets /footer/Footer';

const Container = styled.div`
  display:flex;
  flex-direction:column;
`;

const Header = styled.div`
  color:#D7816A;
  background-color:#FEFEF2;
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  font-size:25px;
  font-weight:bold;
  box-shadow: 0 3px 6px 0 #FEFEF2;
`;

const AppNameComponent = styled.div`
  display:flex;
  align-content:center;
`;

const SearchComponent = styled.div`
  display: flex;
  flex-direction:row;
  background-color:#FEFEF2;
  padding:25px;
  border-radius:6px;
  width:50% auto;
`; 

const SearchInput = styled.input`
    margin-left: 15px;
    outline: thistle;
    padding: 15px;
    font-size: 16px;
    font-weight: bold;
    margin-right: 15px
`;
  
/*const Layout = () => {
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
        path: "/post/:id",
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

  <RouterProvider  router={router}/>
]);*/

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent>IKnowYouHungry</AppNameComponent>
        <SearchComponent>
          <i class="fa-solid fa-magnifying-glass"></i>
          <SearchInput placeholder='search recipe' />
        </SearchComponent>
      </Header>
    </Container>
   
  );
}

export default App;
