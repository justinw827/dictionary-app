import "./FavoritesCard.styles.css"

const FavoritesCard = ({ data }) => {
  return (
    <div className="card-container">
      <p>Type: {data.type}</p>
      <p>Definition: {data.definition}</p>
      <p>Example: {data.example}</p>
    </div>
  );
}

export default FavoritesCard;
