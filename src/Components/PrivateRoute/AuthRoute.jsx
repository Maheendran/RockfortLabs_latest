import axios from 'axios'
import React, {useEffect } from 'react'
import { setHeaders } from '../../config/Token'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthRoute = (props) => {
    const {Component}=props
const navigate=useNavigate()

useEffect(()=>{

    const token=localStorage.getItem('Rockfort-Token')

    if(!token){

        navigate('/')
    }else{
        <Outlet/>
    }
   
},[])






  return (
    <>

        <Component/>

    </>
  )
}

export default AuthRoute