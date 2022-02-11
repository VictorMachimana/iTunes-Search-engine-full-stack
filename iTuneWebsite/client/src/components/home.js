import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import "../App.css";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="welcome-heading">
          <h1>Welcome To iTunes Search</h1>
          <Hero />
        </div>
        <div className="welcome-text">
          <h3>Find Your Favorites</h3>
          <div className="categories">
            <ul>
              <li>
                <Link to="/music" className="category-link">
                  MUSIC
                </Link>
              </li>
              <li>
                <Link to="/videos" className="category-link">
                  VIDEOS
                </Link>
              </li>
              <li>
                <Link to="/movies" className="category-link">
                  MOVIES
                </Link>
              </li>
              <li>
                <Link to="/audiobooks" className="category-link">
                  AUDIO BOOKS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
