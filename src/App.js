import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import List from './pages/List';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Search from './pages/Search';

import Style from './App.style'; 

export default function App() {
  return (
    <Router>
      <Style.GlobalStyles />
      <div>
        <ul>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}
