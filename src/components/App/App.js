import React, {useState} from 'react'
import './App.css'
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import yelp from '../util/yelp'

function App() {
  const [businesses, setBusinesses] = useState([])
  {
    console.log(yelp.search(term, location, sortBy))
  }
  const searchYelp = (term, location, sortBy) => {
    console.log(term, location, sortBy)
    yelp.search(term, location, sortBy).then(businesses => {
      setBusinesses(businesses)
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
