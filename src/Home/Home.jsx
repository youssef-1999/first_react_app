import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='about p-2 text-white ' >
      <div className="container  p-3">
        <div className="row">
            <div className="col-md-4">
               <div className="location text-center ">
               <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
               </div>
            </div>
            <div className="col-md-4">
               <div className="web text-center ">
               <h3>AROUND THE WEB</h3>
               <div className="icons d-flex justify-content-center ">
                <div className="links me-2">
                <i class="fa-brands fa-facebook"></i>
               </div>
                <div className="links me-2">
                <i class="fa-brands fa-twitter"></i>
               </div>
                <div className="links me-2">
                <i class="fa-brands fa-linkedin"></i>
               </div>
                <div className="links me-2">
                <i class="fa-solid fa-globe"></i>
                               </div>
               </div>
               </div>
            </div>
            <div className="col-md-4">
                <div className="freelance text-center ">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
