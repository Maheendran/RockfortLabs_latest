import React, { useState } from 'react'
import './Registration.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const Registration = () => {
  const [toggle,setToggle]=useState(true)
  const [restToggle,setRestToggle]=useState(true)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
const [token,setToken]=useState('')
const [loading,setLoading]=useState(false)

const navigate=useNavigate()
  const handleSubmit= async (e)=>{
e.preventDefault()
setLoading(true)
const formdata={
  email,
  password
}

try {

  const response = await axios.post('https://naughty-dove-raincoat.cyclic.app/api/autenticate', formdata);
  const responseData = response.data;
console.log(responseData,"login")
if(responseData.status==="success"){
  toast.success("login success");
  localStorage.setItem("Rockfort-Token",JSON.stringify(responseData.token))
  setLoading(false)
  navigate("/projects")
}else if(responseData.status==="error"){
  toast.error(responseData.message);
  setLoading(false)
}
} catch (error) {
    console.log(error.message)
}
  }

  // resitered mail======================
  const handleVerify=async (e)=>{
    e.preventDefault()
    setLoading(true)
    try {

      if(restToggle){

        const formdata={
        email
      }

      const response=await axios.post('https://naughty-dove-raincoat.cyclic.app/api/reset-password',formdata)
      const responseData = response.data;
      if(responseData.status==="success"){
        toast.success("email sent successful")
        setRestToggle(false)
        setToggle(false)  
        setLoading(false) 
      }

      }
      else{
        const formdata={
          password
        }

        const response=await axios.post(`https://naughty-dove-raincoat.cyclic.app/api/reset-password/${token}`,formdata)
        const responseData = response.data;
      console.log(responseData,"responseData")
        if(responseData.status==="success"){
          setToggle(true)
          setRestToggle(true)
          setLoading(false)
        }
        else{
          toast.error("Invalid token")
          setLoading(false)
        }
      } 
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
        <Toaster toastOptions={{ duration: 3000 }} />
    <div className="register_main">
<div className="container-fluid">
  <div className="col-1 me-auto ">
<NavLink to='/'>
      <img src="../assests/logo.png" alt="" height="50"/>
    </NavLink>
    </div>
</div>
<div className="container">
<div className="row">
<section className="auth_form">
  <div className="container ">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black ">
          <div className="card-body p-md-5 ">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1  m-auto">
        

              {toggle ?
<>
<p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-5">Login</p>
                <form className="mx-1 mx-md-4"   onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-2 mt-3">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>

                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                    
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2 mt-3">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control"  onChange={(e)=>setPassword(e.target.value)}/>
                      <label className="form-label" for="form3Example4c" >Password</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-3 ">

                  <button type="submit" className="btn registerbtn">Login  <span> {loading && <AiOutlineLoading3Quarters   className='spin'/>} </span>  </button>
                  
                  </div>

                </form>
                
</> 
:
<>

{restToggle ? 

<p className="text-center h3 fw-bold mb-2 mx-1 mx-md-4 mt-2">Registered Email</p>
:
<p className="text-center h3 fw-bold mb-2 mx-1 mx-md-4 mt-2">Reset password </p>
}
   <form className="mx-1 mx-md-4 m-auto"   onSubmit={handleVerify} >
               <div className="d-flex flex-row align-items-center mb-2">
                  {restToggle ?    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  :  ""}
                
                  {restToggle ?  
                 <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>

                    :
                  <>
                  <div className="row">
                    <div className="col-12 col-sm-6 m-auto">
                    <div className="form-outline flex-fill mb-0 ">   
                    <input type="text" id="form3Example3c" className="form-control" onChange={(e)=>setToken(e.target.value)} />
                    <label className="form-label" for="form3Example3c">Token</label>
                   </div>
                    </div>

                    <div className="col-12">
                    <div className="form-outline flex-fill mb-0 ">   
                    <input type="password" id="form3Example3c" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
                    <label className="form-label" for="form3Example3c">New password</label>
                  </div>
                    </div>

                  </div>
                 
                  
                </>
                  


}
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-3 ">
                  {restToggle ?  
                  <button type="submit" className="btn registerbtn" >Verify <span> {loading && <AiOutlineLoading3Quarters   className='spin'/>} </span> </button>:
                  <button type="submit" className="btn registerbtn" >Reset <span> {loading && <AiOutlineLoading3Quarters   className='spin'/>} </span> </button>
                  }
                  </div>

                </form>
</>
}






       {toggle ?       
        <p className='ms-auto text-center' style={{cursor:"pointer"}} onClick={()=>setToggle(!toggle)}>Reset password</p>
        :
       <p className='ms-auto text-center' style={{cursor:"pointer"}} onClick={()=>setToggle(!toggle)}>Already an account! Login</p>
       
      
}
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      <img src="../assests/logo.png" className="img-fluid"  alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</div>


    </div>
    
    
    
    
    </>
  )
}

export default Registration