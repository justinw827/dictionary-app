import React, { useState } from 'react'
import { GetSearchResult } from '../../Api'
import "./SearchBar.styles.css"

const SearchBar = ({ setResults, setIsLoading }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchTerm.length > 0) {
      setIsLoading(true)
      GetSearchResult(searchTerm)
        .then(response => {
          setResults(response)
          setIsLoading(false)
          setMessage("")
        })
        .catch(error => {
          if (error.response.status === 404) {
            setMessage(`${searchTerm} was not found`)
          }
          setIsLoading(false)
        })
    } else {
      setMessage("Field can't be empty")
    }
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
      {message.length > 0 && <p>{message}</p>}
    </div>
  );
}

export default SearchBar;