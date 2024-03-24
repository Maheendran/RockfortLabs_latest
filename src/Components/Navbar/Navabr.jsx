import React, { useEffect, useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll';
import '../Navbar/Navbar.css'

const Navabr = () => {
  const[token,setToken]=useState('')
 useEffect(()=>{
  const token=localStorage.getItem("token")
  setToken(token)
 },[])
const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('Rockfort-Token')
    navigate('/register')
  }
  return (
    <>
<nav class="navbar navbar-expand-lg nav_cover navMain">
  <div class="container-fluid nav_main">
    <NavLink to='/'>
      <img src="../assests/logo.png" alt="" height="50"/>
    </NavLink>
    <p class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i></p>
      

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
      <li>   
   <NavLink to='/audience'>
   
   <p className="nav-item nav-link   text-dark  ">Audience </p>
</NavLink>
</li>

      <li>
       
       <Link
spy={true} to={"About"} smooth={true} >
  <p className="nav-item nav-link  text-dark ">Company</p>
</Link>
       </li>
        <li>
       
        <Link
spy={true} to={"service"} smooth={true} >
   <p className="nav-item nav-link  text-dark  ">Offerings</p>
</Link>
        </li>

<li>
  <a href="/tanun" target='blank'>
  <p className="nav-item nav-link  text-dark  ">Incubatees</p></a>

</li>


<li>  
    <Link
spy={true} to={"contact"} smooth={true}>
   <p className="nav-item nav-link   text-dark  " href="">Contact <span class="sr-only">(current)</span></p>
</Link></li>
<li>   
   <NavLink to='/team'>
   <p className="nav-item nav-link   text-dark  ">Team </p>
</NavLink>
</li>
{token && <li>   
   <NavLink to='/projects'>
   <p className="nav-item nav-link   text-dark  ">Projects </p>
</NavLink>
</li>}
<li>   
   
{ token?
  <p className="nav-item nav-link   text-dark" onClick={handleLogout}>Logout </p>

:
<NavLink to='/register'>
<p className="nav-item nav-link   text-dark  ">Login </p>
</NavLink>
}

</li>

      </ul>
    </div>
  </div>
</nav>





    </>
  )
}

export default Navabr