import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { getCurrent, logout } from '../redux/action/actionuser'
import { Button } from 'bootstrap'

function Navbar() {
  const navigate=useNavigate()
  const state = useSelector((state)=>state.handleCarte)
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getCurrent())
  },[])
  
  const user=useSelector(state=>state.Reducer.user)


  console.log(user)
  console.log(state)
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
    <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4" to="/">
        CityShop
    </NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
            </NavLink>
        </li>
        
      </ul>
     <div className="bouttons">
     {
      !user.name? <><NavLink style={{color:'#008080'}}  to="/login" className="btn btn-outline-dark">
      <i className="fa fa-sign-in me-1" ></i> Login </NavLink>
      
          <NavLink style={{color:'#008080'}} to="/register" className="btn btn-outline-dark ms-2">
      < i className="fa fa-user-plus me-1"></i> Register </NavLink>
      </> 
      :< button  style={{color:'#008080'}} className="btn btn-outline-dark"  onClick={()=>dispatch(logout(navigate))}>
          <i className="fa fa-sign-in me-1" ></i> Log-out  </button>
     }
    <NavLink style={{color:'#008080'}} to="/cart" className="btn btn-outline-dark ms-2">
          <i className="fa fa-cart-plus me-1"></i> Cart({state?.product.length}) </NavLink>
     </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
