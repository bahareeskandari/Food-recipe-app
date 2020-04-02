import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

const apiKey =
  'RYZQu4qcpmV92yqbxWx2AjBqO0J4iNcO6d-_XysNW7w6GrnyBTYdDuv8zqD6eic26Nvfks2VwZ4YPmYNgDX2_yysfq6PyOxFZsG8dldDsVfv6gyLCiI_WUXoa5CDXnYx'

const yelp = {
  search: function(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}N&sort_by=${sortBy}`,
      {headers: {Authorization: `Bearer${apiKey}`}}
    )
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return console.log(business)
          })
        }
      })
  }
}
export default yelp
