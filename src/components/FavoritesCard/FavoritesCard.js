import { useState } from 'react'
import { DeleteFavorite } from '../../Api'

import "./FavoritesCard.styles.css"

const FavoritesCard = ({ data, setMessage }) => {
  const [displayStatus, setDisplayStatus] = useState("block")
  const handleUnfavorite = (event) => {
    DeleteFavorite(data._id)
      .then(response => {
        if (response.status === 200) {
          setMessage(`Successfully unfavorited ${data.word} (${data.type})`)
          setDisplayStatus("none")
        }
      })
      .catch(error => {
        setMessage("There was a problem with your request")
      })
  }

  return (
    <div key={data._id} className="card-container" style={{display: `${displayStatus}`}}>
      <p>Word: {data.word}</p>
      <p>Type: {data.type}</p>
      <p>Definition: {data.definition}</p>
      <p>Example: {data.example}</p>
      <div>
        <p>Image: </p>
        <img src={`$data.image-url`} alt="n/a"/>
      </div>
      <button onClick={handleUnfavorite}>Unfavorite</button>
    </div>
  );
}

export default FavoritesCard;
