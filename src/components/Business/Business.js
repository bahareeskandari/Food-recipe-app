import React from 'react'
import './Business.css'

function Business({business}) {
  const {name, imageSrc} = business
  return (
    <div className="Business">
      {console.log(business)}
      {name}
      <div className="image-container">
        <img src={imageSrc} alt="" />
      </div>
      <h2> {name}</h2>
      <div className="Business-information">
        <div className="Business-address"></div>
        <div className="Business-reviews"></div>
      </div>
    </div>
  )
}
export default Business
