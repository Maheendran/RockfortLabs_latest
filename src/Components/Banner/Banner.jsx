import React, { useEffect } from 'react'
import '../Banner/Banner.css'
import ScrollToTop from "react-scroll-to-top";
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from '../Navbar/Navabr'
const Banner = () => {
    const headinganimation=useAnimation()
    const{ref,inView}=useInView({
      threshold:0.1
    })
    useEffect(()=>{
  if(inView){
    headinganimation.start({
      y:'0rem',
      transition:{
        type:"spring",duration:2,bounce:0.2
      }
    })
  }
  if(!inView){
    headinganimation.start({y:'-10vw'})
  }
    },[inView])
  return (
    <>
    
    
    <ScrollToTop className='scrolltop' smooth='true' style={{height:"40px",width:"40px",backgroundColor:"white",borderRadius:"50%",
boxShadow:" rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",

}} />
<div id='home'className='container-fluid bannerMain'ref={ref}>
<Navbar/>

<div className="row text-center">
<div className="col-12  col-lg-7 me-auto  banner_heading">
  <div className="row">
  <div className="col-12 col-sm-6 mx-auto ">
      <span>
        <h1 style={{fontWeight:'600'}}>
          <Typewriter cursor loop={0} 
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
           words={['Think big?','yes, we are the ones!']}/>
        
          </h1>  
          </span>
  </div>

  </div>


</div> 


</div>

</div>
    
    
    </>
  )
}

export default Banner