import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { emailValidator, passwordValidator } from '../components/regeValidation';
import {useNavigate} from 'react-router-dom';
const Login = () => {

  const navigate = useNavigate();

  //create input for when user enters email and password
  const [input,setinput] = React.useState({email: " ", password: " "});

  //create error message variable  ~ Prevents user from entering homepage
  const [errorMessage, setErrorMessage] = React.useState(" ");

  //create error success message varibale ~ enables user to enter into weather
  const [sucessMessage, setSuccessMessage] = React.useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();
    setSuccessMessage('')
    if(!emailValidator(input.email)) return setErrorMessage('Please enter valid email');


    if(!passwordValidator(input.password))
      return setErrorMessage(
        'Password should have minimum 8 characters with the combination of uppercase, lowercase, numbers and specialCharacters'
      );
      setErrorMessage('Successfully Validated')

      //set success message that enables existing users to login  (write all users)
      if(input.email !== 'admin@a.com' || input.password !== 'aD!min123') return setErrorMessage('Please enter valid email');
      if (input.email !== 'colosseum@docs.gmail' || input.password!== 'Ch33sec@ke246') return setErrorMessage('Please enter valid email');
      if(input.email !== 'phutphut@gmail.com' || input.password!== 'mArr!ot789') return setErrorMessage('Please enter valid email');
      if (input.email !== 'test123@gmail.com' || input.password !== 'T#sray1233?')  return setErrorMessage('Please enter valid email');
      if (input.email !== 'enca.net@gmail.com' || input.password !== 'w3Athaar$!')  return setErrorMessage('Please enter valid email');

      navigate('/');
      localStorage.setItem('auth', true)
  }

  const handleChange = e =>{
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  //create form submitter that enables authentication and authorization instead allowiing default user
  const formSubmitter = e => {

    e.preventDefault();
    setSuccessMessage('')
    if(!emailValidator(input.email)) return setErrorMessage('Please enter valid email');

    if(!passwordValidator(input.password))
      return setErrorMessage(
        'Password should have minimum 8 characters with the combination of uppercase, lowercase, numbers and specialCharacters'
      );
      setErrorMessage('Successfully Validated')

      //set success message that enables existing users to login  (write all users)
      if(input.email !== 'admin@a.com' || input.password !== 'aD!min123')  return setErrorMessage('Please enter valid email');
      if (input.email !== 'colosseum@docs.gmail' || input.password!== 'Ch33sec@ke246') return setErrorMessage('Please enter valid email');
      if(input.email !== 'phutphut@gmail.com' || input.password!== 'mArr!ot789') return setErrorMessage('Please enter valid email');
      if (input.email !== 'test123@gmail.com' || input.password !== 'T#sray1233?') return setErrorMessage('Please enter valid email');
      if (input.email !== 'enca.net@gmail.com' || input.password !== 'w3Athaar$!') return setErrorMessage('Please enter valid email');


    
  }
  return (

    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5" onSubmit={formSubmitter}>
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              {errorMessage.length > 0 && 
              (<div style ={{ marginBotom: "10px", color: "red"}}>
                {errorMessage}
                </div>
                )}

              {sucessMessage.length > 0 && 
              (<div style ={{ marginBotom: "10px", color: "green"}}>
                {sucessMessage}
                </div>
                )}

              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg"  onChange={handleChange}/>
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={handleChange} />
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>
              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <button className="btn btn-outline-light btn-lg px-5" type="submit"  onClick={() => navigate('home')}>Login</button>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg" /></a>
              </div>
            </div>
            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    
  )
}

export default Login
