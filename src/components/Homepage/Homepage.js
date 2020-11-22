import { Route, Switch, Redirect } from 'react-router-dom';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import SearchPage from '../SearchPage/SearchPage';
import TabPicker from '../TabPicker/TabPicker';
import "./Homepage.styles.css"

const Homepage = () => {
  return (
    <div>
      <div className="tab-outer-container">
        <TabPicker />
      </div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/search"/>
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Homepage;
