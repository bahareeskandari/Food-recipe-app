import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

require('es6-promise').polyfill()
require('isomorphic-fetch')

let Keys
if (process.env.NODE_ENV === 'production') {
  Keys = process.env
} else {
  Keys = require('../util/keys.json')
}
//https://baharesfood.herokuapp.com/api/getBusinesses?term=${term}&location=${location}&sortBy=${sortBy}
//Keys.REACT_APP_APIKEY
const yelp = {
  async searchYelp(term, location, sortBy) {
    return fetch(
      `https://baharesfood.herokuapp.com/api/getBusinesses?term=${term}&location=${location}&sortBy=${sortBy}`,
      {headers: {Authorization: `Bearer ${Keys.REACT_APP_APIKEY}`}}
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            console.log(business)
            return {
              id: business.id,
              rating: business.rating,
              open: business.is_closed,
              price: business.price,
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
  },
}
export default yelp
