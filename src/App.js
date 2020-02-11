import React from 'react';
import reducers from "./redux/index";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Favorite from './pages/Favorite';
import Top from './pages/Top';
import Navbar from './components/Navbar';

const store = createStore(reducers, applyMiddleware(thunk));

const Layout = props => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container pt-5">
        {props.children}
      </div>
    </>
  )
}


function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          
          <Switch>
            <Route path="/" exact>
              <Layout>
                <Home/>
              </Layout>
            </Route>
            <Route path="/catalog">
              <Layout>
                <Catalog/>
              </Layout>
            </Route>
            <Route path="/favorite">
              <Layout>
                <Favorite/>
              </Layout>
            </Route>
            <Route path="/top">
              <Layout>
                <Top/>
              </Layout>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
