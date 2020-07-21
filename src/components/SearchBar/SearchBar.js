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
          <input placeholder="Search food" onChange={handleTermChange} />
          <input placeholder="What city?" onChange={handleLocationChange} />
        </div>

        <div className="SearchBar-submit" onClick={handleSearch}>
          <a>Let's Go</a>
        </div>
        <div  className="SearchBar-submit-left">
          <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1590082480%2FGettyImages-945578702.jpg%3Fitok%3DzJRb8Xm5" alt="" />
          <h1>Popular searches</h1>
          <h2>Italian</h2>
          <h2>Mexican</h2>
          <h2>Asian</h2>
          <h2>New York</h2>
          <h2>Boston</h2>

        </div>
      </div>
    </div>
  )
}
export default SearchBar
