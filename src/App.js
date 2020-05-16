import React from 'react';
import './App.css';
import Movies from './components/movies/Movies';
import FavoriteMovieList from './components/movies/FavoriteMovieList';

import {
   BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">

          <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          </div>
        </div>
      </div>
      <div className="container">
      <Router>
        <Switch>
          <Route exact path="/"><Movies/></Route>
          <Route path="/fav"><FavoriteMovieList/></Route>
        </Switch>
      </Router>
      </div>
     
    </div>
  );
}

export default App;
