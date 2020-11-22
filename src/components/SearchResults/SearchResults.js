import React, { useState } from 'react'
import { AddFavorite } from '../../Api'

import "./SearchResults.styles.css"

const SearchResults = ({results}) => {
  const [message, setMessage] = useState("")
  const handleClick = (event) => {
    const resultId = event.target.parentElement.id
    const savedResult = {word: results.word, ...results.definitions[resultId]}
    AddFavorite(savedResult)
      .then(response => {
        if (response.status === 200) {
          setMessage("Successfully favorited word")
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  const renderResults = () => {
    let count = 0;
    return results.definitions?.map(result => {
      count++
      return (
        <div id={`${count-1}`} key={`${count-1}`} className="result">
          <p className="result-line">Type: {result.type}</p>
          <p className="result-line">Definition: {result.definition}</p>
          <p className="result-line">Example: {result.example}</p>
          <img src={`$result.image-url`} alt="n/a" />
          <button style={{width: "100px"}} onClick={handleClick}>Favorite</button>
        </div>
      )
    })
    }

  return (
    <div className="results-container">
      <h1>Results</h1>
      {message.length > 0 && <p>{message}</p>}
      <div className="results-list">
        {renderResults()}
      </div>
    </div>
  );
}

export default SearchResults;