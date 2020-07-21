import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

require('es6-promise').polyfill()
require('isomorphic-fetch')

let Keys
if (process.env.NODE_ENV === 'production') {

  console.log("process env.node")
  Keys = process.env
} else {
  console.log('inside local? ', process.env.NODE_ENV)
  Keys = require('../util/keys.json')
  console.log(Keys, Keys.REACT_APP_APIKEY)
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

  },
}
export default yelp
