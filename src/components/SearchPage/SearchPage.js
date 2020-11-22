import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import "./SearchPage.styles.css"

const SearchPage = () => {
  const [results, setResults] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <SearchBar setResults={setResults} setIsLoading={setIsLoading} />
      {!isLoading ? <SearchResults results={results}/> : <p>Loading...</p> }
    </>
  );
}

export default SearchPage;