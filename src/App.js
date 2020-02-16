import React from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Home from './pages/Home';
import Catalog from './pages/Catalog';
import MovieInfo from './pages/MovieInfo';
import Favorite from './pages/Favorite';
import UpcomingMovies from './pages/UpcomingMovies';
import Navbar from './components/Navbar';


const store = createStore(reducers, applyMiddleware(thunk));

const Layout = props => (
  <>
      <Navbar/>
      <div className="container mt-5">
          {props.children}
      </div>
  </>
)

const routes = [
  {
      path: '/',
      exact: true,
      main: () => <Layout>
          <Home/>
      </Layout>
  },
  {
      path: '/catalog',
      exact: false,
      main: () => <Layout>
          <Catalog/>
      </Layout>
  },
  {
      path: '/favorite',
      exact: false,
      main: () => <Layout>
          <Favorite/>
      </Layout>
  },
  {
      path: '/upcoming',
      exact: true,
      main: () => <Layout>
          <UpcomingMovies/>
      </Layout>
  },
  {
      path: '/movieinfo/:id',
      exact: false,
      main: () => <Layout>
          <MovieInfo/>
      </Layout>
  }

]

const getRoutes = () => {
  return routes.map((route, index) => {
      return <Route
          exact={route.exact} 
          key={index}
          path={route.path}>
          {route.main}
      </Route>
  })
}
function App() {
  return <Provider store={store}>
      <Router>
          <Switch>
              {getRoutes()}
          </Switch>
      </Router>
  </Provider>
}



export default App;
