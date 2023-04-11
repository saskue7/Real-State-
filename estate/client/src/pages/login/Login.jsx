import React, { useContext, useRef } from 'react'
import "./login.css"
import { loginCall } from '../../apiCalls';
import { CircularProgress } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
 const email = useRef();
 const password = useRef();
 const { user, isFetching, error, dispatch } = useContext(AuthContext)
 console.log(user, isFetching, error, dispatch)

 const handleClick = (e) => {
  e.preventDefault();
  loginCall({ email: email.current.value, password: password.current.value }, dispatch)

 }

 console.log(user)
 return (
  <div className="login">
   <div className="loginWrapper">
    <div className="loginLeft">
     <h3 className="loginLogo">DREAM HOME</h3>
     <span className="loginDesc">Meet your Dream Home</span>
    </div>
    <div className="loginRight">

     <form className="loginBox" onSubmit={handleClick}>
      <input
       placeholder='Email'
       required
       type='email'
       ref={email}
       className="loginInput" />
      <input
       placeholder='Password'
       type='password'
       required
       minLength="6"
       ref={password}
       className="loginInput" />
      <button type="submit" className='loginButton'disabled={isFetching } >{isFetching ? <CircularProgress color='inherit' size="28px" /> : "LogIn"}</button>
      <span className="loginForgot">Forgo?</span>
      <Link to="/register">
       <button className="loginRegisterButton">
        {isFetching ? <CircularProgress color='inherit' size="28px" /> : "Sign Up"}
       </button>
      </Link>
     </form>
    </div>
   </div>
  </div>
 )
}

export default Login