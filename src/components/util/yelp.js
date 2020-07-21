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
      `https://baharesfood.herokuapp.com/api/getBusinesses?term=${term}&location=${location}&sortBy=${sortBy}`,
      {headers: {Authorization: `Bearer ${KEYS.REACT_APP_apiKey}`}}
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
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
