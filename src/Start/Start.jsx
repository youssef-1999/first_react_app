import React from 'react'
import svg from './imgs/avataaars.svg'
import './Start.css'
import Icon from '../Icon/Icon'

function Start() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 flex-column start p-5 text-white ' >
      <div >
      <img src={svg} className='w-100' alt="" />
      </div>
      <h1 >START FRAMEWORK</h1>
      <Icon/>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}

export default Start
