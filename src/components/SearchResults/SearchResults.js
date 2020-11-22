import React, { useState } from 'react'
import { AddFavorite } from '../../Api'

import "./SearchResults.styles.css"

const SearchResults = ({results}) => {
  const handleClick = (event) => {
    const resultId = event.target.parentElement.id
    const savedResult = results.definitions[resultId]
    console.log(savedResult);
    AddFavorite(savedResult)
      .then(response => {
        console.log(response);
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
      <div className="results-list">
        {renderResults()}
      </div>
    </div>
  );
}

export default SearchResults;