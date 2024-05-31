import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutView from "./Components/AboutView";
import SearchView from "./Components/SearchView";
import MovieView from "./Components/MovieView";
import { Redirect, Switch, Route } from "react-router-dom";

function App() {
  const [searchResult, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8b44f8fec241953c7ed4a4df1f2e5266&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResult} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />

        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
