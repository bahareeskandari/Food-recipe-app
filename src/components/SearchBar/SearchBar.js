import React, {useState} from 'react'
import './SearchBar.css'

function SearchBar({searchYelp}) {
  const [sortLinks, setSortLinks] = useState({
    term: '',
    location: '',
    sortBy: 'best_match',
  })

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  }

  const getSortByClass = (sortByOption) => {
    if (sortLinks.sortBy === sortByOption) {
      return 'active'
    } else {
      return ''
    }
  }

  const handleSortByChange = (sortByOption) => {
    setSortLinks({...sortLinks, sortBy: sortByOptions[sortByOption]})
  }
  const handleTermChange = (event) => {
    setSortLinks({...sortLinks, term: event.target.value})
  }
  const handleLocationChange = (event) => {
    setSortLinks({...sortLinks, location: event.target.value})
  }

  const handleSearch = (event) => {
    const {term, location, sortBy} = sortLinks
    searchYelp(term, location, sortBy)
    event.preventDefault()
  }

  return (
    <div>
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {Object.keys(sortByOptions).map((sortByOption) => (
              <li
                key={sortByOption}
                className={getSortByClass(sortByOption)}
                onClick={() => handleSortByChange(sortByOption)}
              >
                {sortByOption}
              </li>
            ))}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={handleTermChange} />
          <input placeholder="Where?" onChange={handleLocationChange} />
        </div>
        <div className="SearchBar-submit" onClick={handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
    </div>
  )
}
export default SearchBar
