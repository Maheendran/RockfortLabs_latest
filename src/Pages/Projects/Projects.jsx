import React from 'react'
import './Project.css'
import { NavLink } from 'react-router-dom'
const Projects = () => {
  return (
    <>
<div className="container-fluid">
  <div className="col-1 me-auto ">
<NavLink to='/'>
      <img src="../assests/logo.png" alt="" height="50"/>
    </NavLink>
    </div>
</div>
    <div className="container project_box m-auto">



<div className="col-10 col-sm-5 col-md-3 m-auto text-center ">
<div className="row project_card m-2">
    <NavLink to={'https://sensol7.netlify.app/home'}>
    <h1>Sensol</h1>
    </NavLink>

</div>
<div className="row project_card m-2">
<NavLink to={'/'}>
    <h1>Home</h1>
    </NavLink>
</div>




</div>



    </div>
    
    
    </>
  )
}

export default Projects