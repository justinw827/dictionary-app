import FavoritesCard from '../FavoritesCard/FavoritesCard';
import "./FavoritesList.styles.css"

const FavoritesList = ({ favorites, setMessage }) => {
  const renderFavorites = () => {
    return favorites.map(favorite => (
      <FavoritesCard key={favorite._id} data={favorite} setMessage={setMessage} />
    ))
  }
  return (
    <div>
      {renderFavorites()}
    </div>
  );
}

export default FavoritesList;
