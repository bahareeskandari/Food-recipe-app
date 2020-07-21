import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
require('es6-promise').polyfill()
require('isomorphic-fetch')

let KEYS
if (process.env.NODE_ENV === 'production') {
  KEYS = process.env
} else {
  KEYS = require('../util/keys.json')
}
const yelp =  {
  async searchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {headers: {Authorization: `Bearer ${KEYS.apiKey}`}}
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            console.log(business)
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zipCode,
            }
          })
        }
      })
      .catch((error) => console.log(error))
  },
}
export default yelp
