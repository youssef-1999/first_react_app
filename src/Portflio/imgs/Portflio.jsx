import React from 'react'
import './Portflio.css'
import Icon from '../../Icon/Icon'
import Images from './Images'

function Portflio() {
  return (
    <div className='portflio p-4'>
      <div className="container p-5 ">
        <h1 className='text-center fw-bold'>PORTFOLIO COMPONENT</h1>
        <Icon />
        <Images/>
      </div>
    </div>
  )
}

export default Portflio
