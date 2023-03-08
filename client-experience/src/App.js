
import './App.css';
import Login from './Pages/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/login" component={Login} />
      </BrowserRouter>
    </div>
  )
   
}

export default App;
