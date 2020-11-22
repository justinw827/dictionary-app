import { useState, useEffect } from 'react'
import FavoritesList from '../FavoritesList/FavoritesList';
import Dropdown from '../Dropdown/Dropdown';
import { GetFavorites } from '../../Api'
import "./FavoritesPage.styles.css"

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([])
  const [filteredFavorites, setFilteredFavorites] = useState([])
  const [filter, setFilter] = useState("none")

  useEffect(() => {
    GetFavorites()
      .then(response => {
        setFavorites(response)
        setFilteredFavorites(response)
      })
      .catch(error => {
        console.log(error);
      })
    }, [])
    
    const filterFavorites = (newFilter) => {
      const newList = newFilter === "none" ? favorites : favorites.filter(word => word.type === newFilter)
      setFilteredFavorites(newList)
    }

    const handleFilterChange = (event) => {
      setFilter(event.target.value)
      filterFavorites(event.target.value)
    }

    const getTypes = () => {
      return favorites.map(favorite => favorite.type)
    }

  return (
    <div>
      <Dropdown filter={filter} handleFilterChange={handleFilterChange} types={getTypes()} />
      <FavoritesList favorites={filteredFavorites} />
    </div>
  );
}

export default FavoritesPage;
