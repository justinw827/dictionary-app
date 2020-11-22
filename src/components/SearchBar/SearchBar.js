import React, { useState } from 'react'
import { GetSearchResult } from '../../Api'
import "./SearchBar.styles.css"

const SearchBar = ({ setResults, setIsLoading }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    GetSearchResult(searchTerm)
      .then(response => {
        setResults(response)
        setIsLoading(false)
      })
      .catch(error => {
        // TODO
        console.log(error);
      })
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div id="outer-container">
      <form onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          onChange={handleChange}
          placeholder='Search Dictionary'
          className="search-bar"
        />
        <button className="search-button" >Search</button>
      </form>
    </div>
  );
}

export default SearchBar;