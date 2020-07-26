import React from 'react'
import './Business.css'

function Business({business}) {
  const {name, city, id, rating, imageSrc} = business

  return (
    <div className="Business" key={id}>
      <div className="image-container">
        <img src={imageSrc} alt="pic" />
      </div>
      <div className="Business-information">
        <h3>{name}</h3>
        <div className="Business-address">{city}</div>
        <br />
        <div className="Business-reviews">Stars {rating}</div>
      </div>
    </div>
  )
}
export default Business
//git remote set-url origin https://github.com/bahareeskandari/Food-recipe-app.git
