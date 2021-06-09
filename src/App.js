import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout'


function App() {
  return <div>
    <Layout>
    <Switch>
      <Route exact path='/'>
        <AllMeetupsPage />
      </Route>
      <Route exact path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route exact path='/favorites'>
        <FavoritesPage />
      </Route>
    </Switch>
    </Layout>
  </div>;
}

export default App;
