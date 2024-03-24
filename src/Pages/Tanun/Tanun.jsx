import React from 'react'
import './Tanun.css'
const Tanun = () => {
  return (<>
  <div className='container-fluid tanunPage'>
      <div className='col-12 col-sm-8 col-lg-6 bannerIMG m-sm-5'>
        <img  src="../assests/TANUNLogo.png" alt="" />

      </div>
    </div>

    {/* sceond section */}
    <div className='container-fluid  px-sm-5 py-sm-5 mt-2 mt-sm-0'>
      <div className="row  ">
         <div className='col-4 col-sm-2 col-lg-2  tanunLogo position-absolute'>
        <img  src="../assests/TANUNLogo.png" alt="" />

      </div>
      <div className='col-12 pt-5 pb-3 py-sm-5 py-sm-0 col-sm-8 col-lg-6 text-center mx-auto ' >
        <p className='intro_p'>INTRODUCING
</p>
<h1 className='Tanunheading'>TANUN ENERGY</h1>
      </div>
      </div>
     
<div className='d-flex flex-column gap-sm-3 gap-lg-4 tanunPara'>
    <p>Tanun, also known as Tanun Inc and Tanun Ventures, emerged onto the scene in 2017-18 as a premier electric three-wheeler
company with a primary focus on the Indian market. Renowned for its superior price-performance features, the company
quickly garnered recognition and approval from industry giants such as OLA, Big Basket, and Uber.</p>

<p>However, in 2019, Tanun made a strategic shift away from commercializing electric vehicles as an original equipment
manufacturer (OEM). Instead, the company redirected its efforts towards research and development (R&D) in the energy
sector.</p>

<p>Fast forward to 2021, Tanun transformed into an R&D powerhouse, specializing in the development of commercializable
energy solutions at the point of generation and use. These innovative solutions are poised to be licensed to electric vehicle
OEMs, marking a significant evolution in Tanun's trajectory.</p>

<p>Notably, in January 2022, Tanun took a pivotal step forward by filing for a US Patent based on its latest innovation. With a
steadfast commitment to innovation and productization, Tanun is poised to revolutionize the energy sector with its cutting-
edge solutions.</p>
</div>

    
    </div>

    {/* third section */}
    <div className='container-fluid  px-sm-5 py-sm-5'>
      <div className="row  mb-sm-5 ">
         <div className='col-4 col-sm-2 col-lg-2  tanunLogo position-absolute'>
        <img  src="../assests/TANUNLogo.png" alt="" />

      </div>
      <div className='col-12 pt-5 pb-3 py-sm-0 col-sm-8 col-lg-6 text-center mx-auto ' >

<h1 className='Tanunheading'>WHY TANUN ENERGY eV
Usecase?
</h1>
      </div>
      </div>
     
<div className=' '>
<ul className=' d-flex flex-column gap-sm-3 gap-lg-5 tanunPara'>
  <li>
    <span className='ul_bold text-bold font-weight-bold'>
        Groundbreaking Innovation:
    </span>
 TANUN ENERGY unveils a revolutionary innovation poised to transform the
  energy landscape.
  </li>


  <li>
  <span className='ul_bold font-weight-bold'>
  Continuous Energy Generator:
  </span>
  Introducing a new continuous energy generator offering that significantly reduces
battery needs by an impressive 90%.
  </li>

  <li>
  <span className='ul_bold font-weight-bold'>
  Cost Savings:
  </span>
  TANUN ENERGY's innovative approach slashes operating costs and total cost of ownership (TCO) by
an unprecedented 90%, delivering unparalleled efficiency and significant cost savings.
  </li>

  <li>
  <span className='ul_bold font-weight-bold'>
  Independence from Conventional Methods:
  </span>
 Unlike traditional power generation methods reliant on fossil fuels,
solar, wind, hydro, or battery technology, TANUN ENERGY's disruptive patent-pending innovation operates
independently.
  </li>

  <li>
  <span className='ul_bold font-weight-bold'>
  Global Impact:
  </span>
 With exponential global potential, TANUN ENERGY is positioned to lead the charge towards a
cleaner, greener, and more efficient future, shaping the energy landscape on a global scale
  </li>
</ul>


</div>

    
    </div>
    {/* fouth section */}
    <div className='container-fluid  tanunPages px-sm-5 py-sm-5'>
      <div className="row  mb-sm-5 ">
         <div className='col-4 col-sm-2 col-lg-2  tanunLogo position-absolute'>
        <img  src="../assests/TANUNLogo.png" alt="" />

      </div>
      <div className='col-12 pt-5 pb-3 py-sm-0 col-sm-8 col-lg-8 text-center mx-auto ' >

<p className='tanunPhead'>A Strategic Alliance for Innovation</p>
      </div>
      </div>
     <p>Tanun, incubated under Rockfort Labs and headquartered in the USA, boasts operational footprints in both the USA and India.
The company's current focus lies in the development of licensable point-of-use energy solutions across various sectors:</p>
<div className='col-11 col-sm-8 col-lg-6 mx-auto mt-5'>

<img className='w-100 ' src="../assests/Sectors.gif" alt="" />

</div>

    
    </div>
       {/* fifth section */}
       <div className='container-fluid  mt-5 mt-sm-0 tanunPages px-sm-5 py-sm-5'>
      <div className="row  mb-sm-5 ">
         <div className='col-4 col-sm-2 col-lg-2  tanunLogo position-absolute'>
        <img  src="../assests/TANUNLogo.png" alt="" />

      </div>
      <div className='col-12 pt-5 pb-3 py-sm-0 col-sm-8 col-lg-6 text-center mx-auto ' >

<p className='tanunPhead'>Consulting Services and Contact</p>
      </div>
      </div>

      <div className=' d-flex  h-75 flex-column gap-sm-3 gap-lg-5 mt-sm-5  '>
      <p>In addition to doing R & D for its own use, Tanun also offers Advisory and Consulting services on Energy Related matters.
</p>
<p>To reach the Tanun team, please use the contact page in <span className='border-bottom border-2'><a href="https://rockfortlabs.in"> https://rockfortlabs.in</a></span></p>
<p className='lasthead text-center m-auto'>Imagine a world of where energy is no longer a constraint !!
</p>
  
      </div>

    
    </div>
  </>
    
  )
}

export default Tanun