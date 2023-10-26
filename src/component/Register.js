import React, { useState } from 'react'
import './Register.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../redux/action/actionuser';
function Register() {
const dispatch=useDispatch()
const navigate=useNavigate()
const[name,setName]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[phone,setPhone]=useState(0)
var data={name,email,password,phone}
console.log(data)
const handleregister=()=>{
    dispatch(register(data,navigate))
}
  return (
<div>
      
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css"
    rel="stylesheet"
  />
  <div className="testbox">
    <h1>Registration</h1>
    <div id='formulaire'>
      <hr />
      <label id="icon" htmlFor="name">
        <i className="icon-envelope " />
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />
      <label id="icon" htmlFor="name">
        <i className="icon-user" />
      </label>
      <input type="text" name="name" id="name" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
      <label id="icon" htmlFor="name">
        <i className="icon-shield" />
      </label>
      <input
        type="password"
        name="name"
        id="name"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />
       <label id="icon" htmlFor="name">
        <i className="icon-phone" />
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Phone number"
        onChange={(e)=>setPhone(e.target.value)}
      />
      <p>
        By clicking Register, you agree on our{" "}
        <a href="#">terms and condition</a>.
      </p>
      <a href="#" className="button" onClick={handleregister}>
        Register
      </a>
    </div>
   </div>

 </div>
  )
}

export default Register;
