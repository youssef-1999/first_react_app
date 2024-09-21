import React from 'react'
import home from '../imgs/poert1.png'
import cake from '../imgs/port2.png'
import circus from '../imgs/port3.png'

function Images() {
    let arr=[
        {
          imgUrl:home,
        },
        {
          imgUrl:cake,
        },
        {
          imgUrl:circus,
        },
        {
          imgUrl:home,
        },
        {
          imgUrl:cake,
        },
        {
          imgUrl:circus,
        }
      ]
  return (
   

    <div className="row g-3">
    {arr.map((img, index) => (
      <div className="col-md-4" key={index}>
        <div className="test">
          <img src={img.imgUrl} alt='img' className='w-100' />
          <div className="layer">
          <i class="fa-solid fa-plus"></i>
                    </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Images
