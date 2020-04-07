import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

const apiKey =
  'RYZQu4qcpmV92yqbxWx2AjBqO0J4iNcO6d-_XysNW7w6GrnyBTYdDuv8zqD6eic26Nvfks2VwZ4YPmYNgDX2_yysfq6PyOxFZsG8dldDsVfv6gyLCiI_WUXoa5CDXnYx'

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse)
      })
  },
}
export default Yelp

/*
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
*/
