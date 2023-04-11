import React, { useRef } from 'react'
import "./register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Register = () => {

 const username = useRef()
 const email = useRef()
 const password = useRef()
 const passwordAgain = useRef()
 const navigate = useNavigate()


 const handleClick = async (e) => {
  e.preventDefault();
  if (passwordAgain.current.value !== password.current.value) {
   password.current.setCustomValidity("Password dont match")
  } else {
   const user = {
    username: username.current.value,
    email: email.current.value,
    password: password.current.value,
   }
   console.log(user)
   try {
    const res = await axios.post("/auth/register", user)
    navigate('/login')
   } catch (err) {
    console.log(err)
   }
  }

 }


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
       placeholder='Username'
       required
       ref={username}
       className="loginInput"
       type="text"
      />
      <input
       placeholder='Email'
       required
       ref={email}
       className="loginInput"
       type="email"
      />
      <input
       placeholder='Password'
       required
       ref={password}
       className="loginInput"
       type="password"
       minLength={6}
      />
      <input
       placeholder='Confirm Password'
       ref={passwordAgain}
       required
       className="loginInput"
       type="password"
       minLength={6}
      />
      <button className='loginButton' type="submit">Sign UP</button>
      <Link to="/login">
       <button className="loginRegisterButton">
        log in to  Account
       </button>
      </Link>
     </form>
    </div>
   </div>
  </div>
 )
}

export default Register