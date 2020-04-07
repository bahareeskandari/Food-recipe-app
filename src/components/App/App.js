import React, {useState} from 'react'
import './App.css'
import Yelp from '../util/Yelp'
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'

function App() {
  const [businesses, setBusinesses] = useState([])

  const searchYelp = (term, location, sortBy) => {
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      console.log(term, location, sortBy)
      console.log(businesses)
      // setBusinesses(businesses)
    })
  }
  return (
    <div className="App">
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  )
}

export default App
