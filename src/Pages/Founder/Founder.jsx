import React from 'react'
import './Founder.css'
import Bhistory from '../../Components/Bhistory/Bhistory'
import { AiFillTwitterCircle , AiFillLinkedin , AiOutlineFire } from 'react-icons/ai';
import { GiDart } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Founder = () => {
  return (
    <div>
        <div className='header'>
        <img src="../assests/2.png" alt="" />
        </div>
    <div className='mainDiv'>
      {/* About 1 - Bootstrap Brain Component */}
      
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-5 order-lg-last">
              <img className="profile img-fluid" loading="lazy" src="../assests/capt.png" alt="" />
            </div>
            <div className="col-12 col-lg-6 col-xl-7 order-lg-first">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">Greetings of the day,</h2>
                  <p className="containerp lead fs-4 text-secondary mb-3">
                   This is KRK, A Sillicon Valley Veteran, Product Maven,
                     idea-to-exit specialist, prolific fundraiser and start-up CPO / CTO</p>
                  {/* <p className="mb-5">Silicon Valley veteran and product expert ready to guide you from idea to exit. Let's optimize product development, ace fundraising, and achieve your startup goals together. Your success is my mission – let's make it happen.</p> */}
                  <div className="titlebreif row gy-4 gy-md-0 gx-xxl-5X">
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <GiDart  className='font_icon'/>
                        </div>
                        <div>
                          <h4 className="mb-3">Approach</h4>
                          <p className="text-secondary mb-0">I'm deeply invested in startup success, 
                          offering three key pillars: viability, scalability, and sustainability. Leveraging my global network, 
                          I facilitate high-level meetings for deep discussions and wise decisions. 
                          With a positive vibe and diverse experience,
                           I swiftly solve problems, keeping focus on the journey's joy.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <AiOutlineFire className='font_icon' />
                        </div>
                        <div>
                          <h4 className="mb-3">Growth Strategist</h4>
                          <p className="text-secondary mb-0">Over three decades, 
                          I've led teams in building and 
                          scaling global businesses and delivering successful exits to bootstrapped startups.
                            Leveraging a broad global network, 
                            I specialize in connecting ideas and opportunities to drive growth and revenue for startups and established organizations alike. Known for strategic prowess and tough negotiation skills,
                           I bring innovation and excellence to every project.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className='history'>
        <Bhistory/>
    </div>
    <div className='footer'>
       <div>
        {/* empty */}
       </div>
       <div className='logotext'>
        <div className='logo'>
          <img src="../assests/3.png" alt="" />
        </div>
        <div className='text'>
            <h5>krk@rockfort.ventures</h5>
            <p>+1-510-972-4661</p>
        </div>
       </div>
       <div  className='socialDiv'>
        <div className='empty'>
            {/* empty */}
        </div>
        <div className='socialIcon'>
           <p>For more Follow me!</p>
           <div className="icon">
                 <Link  target='blank'  to={'https://www.linkedin.com/in/vcramesh1/'}>
                   <AiFillLinkedin className='footer_icon'/>
                </Link>
               <Link target='blank' to={'https://twitter.com/rameshkrk'}>
               <AiFillTwitterCircle  className='footer_icon'/>
               </Link>
              </div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Founder


//  <path d="M146.317,114.961c1.846,3.23,5.22,5.041,8.692,5.041c1.682,0,3.387-0.425,4.952-1.319l21-12 c4.795-2.74,6.461-8.849,3.721-13.644c-2.741-4.795-8.848-6.462-13.644-3.722l-21,12 C145.244,104.058,143.578,110.166,146.317,114.961z"></path> <path d="M237,70c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h8c5.523,0,10-4.478,10-10c0-5.522-4.477-10-10-10H237z"></path> <path d="M493.49,186.031c-11.336-42.415-33.813-81.319-65-112.508c-0.002-0.002-0.004-0.004-0.006-0.006 c-31.19-31.189-70.096-53.668-112.512-65.006c-0.001,0-0.002-0.001-0.003-0.001C294.843,2.863,272.984,0,251,0 s-43.843,2.863-64.969,8.51c-42.419,11.339-81.326,33.817-112.515,65.007c-0.002,0.002-0.004,0.004-0.006,0.006 c-31.187,31.188-53.663,70.092-65,112.508C2.863,207.159,0,229.018,0,251s2.863,43.841,8.51,64.969 c11.337,42.416,33.814,81.32,65,112.508c0.002,0.002,0.004,0.004,0.006,0.006c31.189,31.189,70.096,53.668,112.515,65.007 C207.157,499.137,229.016,502,251,502s43.843-2.863,64.969-8.51c0.001,0,0.002-0.001,0.003-0.001 c42.417-11.338,81.323-33.816,112.512-65.006c0.002-0.002,0.004-0.004,0.006-0.006c31.187-31.188,53.663-70.092,65-112.508 C499.137,294.841,502,272.982,502,251S499.137,207.159,493.49,186.031z M471.376,181.597l-6.995,1.875l-12.351,3.309 c-9.186-28.76-24.536-55.323-44.927-77.742l14.157-14.156C444.122,119.812,461.262,149.469,471.376,181.597z M156.729,265.907 l-16.069,4.306C139.564,263.885,139,257.456,139,251s0.564-12.885,1.659-19.213l16.069,4.306 c-0.778,4.928-1.179,9.913-1.179,14.907S155.95,260.979,156.729,265.907z M145.814,212.463 c4.433-12.089,10.948-23.358,19.234-33.272l11.759,11.759c-6.294,7.777-11.332,16.499-14.916,25.821L145.814,212.463z M126.445,207.272l-57.109-15.301c8.246-25.382,21.806-48.842,39.738-68.755l41.795,41.795 C140.165,177.473,131.872,191.823,126.445,207.272z M121.263,226.589C119.759,234.618,119,242.793,119,251 c0,8.207,0.759,16.382,2.263,24.411l-57.116,15.303C61.393,277.698,60,264.38,60,251s1.393-26.698,4.146-39.714L121.263,226.589z M126.445,294.728c5.427,15.45,13.72,29.799,24.424,42.261l-41.795,41.795c-17.932-19.913-31.491-43.373-39.738-68.755 L126.445,294.728z M145.814,289.537l16.077-4.308c3.583,9.322,8.622,18.044,14.916,25.821l-11.759,11.759 C156.762,312.896,150.247,301.626,145.814,289.537z M176.175,260.696c-0.416-3.214-0.625-6.453-0.625-9.696 s0.209-6.482,0.625-9.696l35.828,9.6c0,0.032-0.002,0.064-0.002,0.097c0,0.033,0.002,0.064,0.002,0.097L176.175,260.696z M270.571,284.712l26.239,26.239c-5.161,3.944-10.81,7.208-16.793,9.702l-9.605-35.849 C270.464,284.774,270.518,284.743,270.571,284.712z M270.411,217.195l9.605-35.849c5.984,2.494,11.633,5.758,16.793,9.702 l-26.239,26.239C270.518,217.257,270.464,217.226,270.411,217.195z M284.713,270.57c0.031-0.053,0.061-0.106,0.092-0.16 l35.847,9.605c-2.495,5.984-5.758,11.632-9.702,16.792L284.713,270.57z M284.805,231.59c-0.031-0.054-0.061-0.107-0.092-0.16 l26.237-26.237c3.944,5.16,7.207,10.808,9.702,16.792L284.805,231.59z M311.044,176.813c-7.776-6.294-16.496-11.33-25.818-14.913 l4.307-16.074c12.087,4.432,23.353,10.945,33.267,19.23L311.044,176.813z M275.405,121.282c-16.073-2.995-32.738-2.995-48.811,0 L211.292,64.17C224.31,61.417,237.621,60,251,60c13.379,0,26.69,1.417,39.708,4.17L275.405,121.282z M251,232 c10.493,0,19,8.507,19,19s-8.507,19-19,19c-10.493,0-19-8.507-19-19C232,240.507,240.507,232,251,232z M241.306,176.184 c6.43-0.826,12.958-0.826,19.388,0l-9.597,35.818c-0.032,0-0.064-0.002-0.097-0.002s-0.064,0.002-0.097,0.002L241.306,176.184z M260.694,325.816c-6.43,0.826-12.958,0.826-19.388,0l9.597-35.818c0.032,0,0.064,0.002,0.097,0.002s0.064-0.002,0.097-0.002 L260.694,325.816z M236.091,345.279c9.856,1.557,19.962,1.557,29.818,0l4.307,16.072c-12.655,2.191-25.776,2.191-38.432,0 L236.091,345.279z M265.909,156.721c-4.928-0.778-9.915-1.171-14.909-1.171s-9.981,0.393-14.909,1.171l-4.307-16.072 c12.655-2.191,25.776-2.191,38.432,0L265.909,156.721z M217.287,231.429c-0.031,0.053-0.061,0.106-0.092,0.16l-35.847-9.605 c2.495-5.984,5.758-11.632,9.702-16.792L217.287,231.429z M205.19,191.049c5.161-3.944,10.81-7.208,16.793-9.702l9.605,35.849 c-0.052,0.03-0.106,0.061-0.159,0.092L205.19,191.049z M217.287,270.57l-26.237,26.237c-3.944-5.16-7.207-10.808-9.702-16.792 l35.847-9.605C217.226,270.464,217.256,270.517,217.287,270.57z M231.429,284.712c0.053,0.031,0.107,0.062,0.16,0.092 l-9.605,35.849c-5.984-2.494-11.633-5.758-16.793-9.702L231.429,284.712z M212.466,145.826l4.307,16.074 c-9.321,3.583-18.041,8.619-25.818,14.913L179.2,165.057C189.113,156.771,200.379,150.258,212.466,145.826z M190.956,325.187 c7.776,6.294,16.496,11.33,25.818,14.913l-4.307,16.074c-12.087-4.432-23.353-10.945-33.267-19.23L190.956,325.187z M226.593,380.723C234.62,382.226,242.792,383,251,383s16.38-0.774,24.407-2.277l15.302,57.107 C277.69,440.583,264.379,442,251,442c-13.379,0-26.69-1.417-39.708-4.17L226.593,380.723z M289.534,356.174l-4.307-16.074 c9.321-3.583,18.041-8.619,25.818-14.913l11.756,11.757C312.887,345.229,301.621,351.742,289.534,356.174z M289.998,251.097 c0-0.032,0.002-0.064,0.002-0.097s-0.002-0.064-0.002-0.097l35.828-9.6c0.416,3.214,0.625,6.453,0.625,9.696 c0,3.243-0.209,6.482-0.625,9.696L289.998,251.097z M345.271,236.093l16.069-4.306c1.096,6.328,1.66,12.757,1.66,19.213 s-0.564,12.885-1.659,19.213l-16.069-4.306c0.778-4.928,1.179-9.913,1.179-14.907S346.05,241.021,345.271,236.093z M351.131,165.011l41.795-41.795c17.932,19.913,31.491,43.373,39.738,68.755l-57.109,15.301 C370.128,191.823,361.835,177.473,351.131,165.011z M356.186,212.463l-16.077,4.308c-3.583-9.322-8.622-18.044-14.916-25.821 l11.759-11.759C345.238,189.104,351.753,200.374,356.186,212.463z M340.108,285.229l16.077,4.308 c-4.433,12.089-10.948,23.358-19.234,33.272l-11.759-11.759C331.487,303.273,336.525,294.552,340.108,285.229z M375.555,294.728 l57.109,15.301c-8.246,25.382-21.806,48.842-39.738,68.755l-41.795-41.795C361.835,324.527,370.128,310.177,375.555,294.728z M380.737,275.411C382.241,267.382,383,259.207,383,251c0-8.207-0.759-16.382-2.263-24.411l57.116-15.303 C440.607,224.302,442,237.62,442,251s-1.393,26.698-4.146,39.714L380.737,275.411z M315.218,49.97l5.184-19.346 c32.128,10.113,61.786,27.253,86.715,50.116L392.96,94.896l-0.02,0.02c-22.419-20.39-48.972-35.735-77.73-44.92L315.218,49.97z M378.801,109.056l-41.802,41.803c-12.463-10.706-26.816-19.001-42.268-24.428l15.305-57.119 C335.417,77.559,358.888,91.123,378.801,109.056z M301.081,25.459L296.99,40.73l-1.092,4.074C281.187,41.613,266.128,40,251,40 s-30.187,1.613-44.897,4.804l-1.092-4.074l-4.091-15.271C233.707,18.209,268.293,18.209,301.081,25.459z M207.269,126.431 c-15.451,5.427-29.804,13.722-42.268,24.428l-41.802-41.803c19.913-17.933,43.384-31.497,68.765-39.744L207.269,126.431z M181.598,30.624l5.184,19.346h0.001l0.007,0.026c-28.758,9.185-55.311,24.53-77.73,44.92l-0.02-0.02L94.882,80.74 C119.811,57.878,149.468,40.739,181.598,30.624z M80.74,94.883l14.157,14.156c-20.392,22.419-35.741,48.982-44.927,77.742 l-15.672-4.199l-3.674-0.984C40.738,149.469,57.878,119.812,80.74,94.883z M25.458,301.081C21.833,284.686,20,267.885,20,251 s1.833-33.686,5.458-50.081l1.089,0.292l18.283,4.899C41.641,220.818,40,235.87,40,251s1.641,30.182,4.831,44.89l-18.283,4.899 L25.458,301.081z M30.624,320.402l3.674-0.984l15.672-4.199c9.186,28.76,24.536,55.323,44.927,77.742L80.74,407.117 C57.878,382.188,40.738,352.531,30.624,320.402z M186.782,452.03l-5.184,19.346c-32.129-10.115-61.787-27.254-86.715-50.116 l14.157-14.156l0.02-0.02c22.419,20.39,48.972,35.735,77.73,44.92L186.782,452.03z M123.199,392.944l41.802-41.803 c12.463,10.706,26.816,19.001,42.268,24.428l-15.305,57.119C166.583,424.441,143.112,410.877,123.199,392.944z M200.919,476.541 l4.091-15.271l1.092-4.074c29.42,6.381,60.375,6.381,89.795,0l1.092,4.074l4.091,15.271 C268.293,483.791,233.707,483.791,200.919,476.541z M294.731,375.569c15.451-5.427,29.804-13.722,42.268-24.428l41.802,41.803 c-19.913,17.933-43.384,31.497-68.765,39.744L294.731,375.569z M320.402,471.376l-5.184-19.346h-0.001l-0.007-0.026 c28.758-9.185,55.311-24.53,77.73-44.92l0.02,0.02l14.157,14.156C382.188,444.123,352.531,461.263,320.402,471.376z M421.26,407.117l-14.157-14.156c20.392-22.419,35.741-48.982,44.927-77.742l15.672,4.199l3.674,0.984 C461.262,352.531,444.122,382.188,421.26,407.117z M476.542,301.081l-1.089-0.292l-18.283-4.899 c3.189-14.708,4.83-29.76,4.83-44.89s-1.641-30.182-4.831-44.89l18.283-4.899l1.089-0.292C480.167,217.314,482,234.115,482,251 S480.167,284.686,476.542,301.081z"></path> 
