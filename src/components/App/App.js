import React, {useState} from 'react'
import './App.css'
import yelp from '../util/yelp'
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'

function App() {
  const [businesses, setBusinesses] = useState([])

  const getBusinesses = (term, location, sortBy) => {
    yelp.searchYelp(term, location, sortBy).then((businesses) => {
      console.log(term, location, sortBy)
      setBusinesses(businesses)
    })
  }
  return (
    <div className="App">
      <SearchBar searchYelp={getBusinesses} />
      <BusinessList businesses={businesses} />
    </div>
  )
}

export default App
