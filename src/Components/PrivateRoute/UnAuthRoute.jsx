import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const UnAuthRoute = (props) => {
    const {Component}=props
    const navigate=useNavigate()

useEffect(()=>{
    const token=localStorage.getItem('Rockfort-Token')
    if(token){
        navigate('/')
        
    }else{
        <Outlet/>
    }
},[])


  return (
    <div>
<Component/>

    </div>
  )
}

export default UnAuthRoute