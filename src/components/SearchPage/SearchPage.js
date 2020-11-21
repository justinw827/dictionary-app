import React, { useState } from 'react'
import { GetSearchResult } from '../../Api'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import "./SearchPage.styles.css"

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
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