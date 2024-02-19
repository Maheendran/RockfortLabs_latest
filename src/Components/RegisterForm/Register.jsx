import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {

  const navigate=useNavigate()
  const [formdata,setFormdata]=useState({})
        const fetchData = async () => {
          try {
            const response = await axios.post('http://localhost:5000/login',formdata);

            if (response.data.success === 'success') {
              navigate('/'); 
            } else {
              navigate('/register');
            }
          } catch (error) {
            navigate('/error');
          }
        };
    
        fetchData();
  return (
    <div>Register</div>
  )
}

export default Register