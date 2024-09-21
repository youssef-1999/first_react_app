import React from 'react'
import './About.css'
import Icon from '../Icon/Icon'

function About() {
  return (
    <div class="abouts p-2 text-white vh-100 d-flex justify-content-center align-items-center ">
      <div className="container ">
        <h3 className='text-center'>ABOUT COMPONENT</h3>
        <Icon/>
        <div className="row">
            <div className="col-md-6 "><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            <div className="col-md-6"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
        </div>
      </div>
    </div>
  )
}

export default About
