import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/action/actionuser';
function Login() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
 
  var data={email,password}
  console.log(data)
  const handlelogin=()=>{
      dispatch(login(data,navigate))
  }
  return (

    
    <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" required="" onChange={(e)=>setEmail(e.target.value)}/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" onChange={(e)=>setPassword(e.target.value)}/>
      <label>Password</label>
    </div>
    <a href="#" onClick={handlelogin}>
      <span />
      <span />
      <span />
      <span />
      Submit
    </a>
  </form>
</div>


    
  )
}

export default Login ;
