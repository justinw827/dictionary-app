import FavoritesCard from '../FavoritesCard/FavoritesCard';
import "./FavoritesList.styles.css"

const FavoritesList = ({ favorites }) => {
  const renderFavorites = () => {
    return favorites.map(favorite => (
      <FavoritesCard data={favorite} />
    ))
  }
  return (
    <div>
      {renderFavorites()}
    </div>
  );
}

export default FavoritesList;
