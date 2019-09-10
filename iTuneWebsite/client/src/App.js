import React from "react";
import NavBar from "./components/navBar";
import Home from "./components/home";
import Music from "./components/music";
import Videos from "./components/videos";
import Movies from "./components/movies";
import AudioBooks from "./components/audiobooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/music" exact component={Music} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/audiobooks" exact component={AudioBooks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
