import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="home-container">
      <h3>GET</h3>
      <div className="home-wrap">
        <h1>MUSIC</h1>
        <img
          src="./music.jpg"
          alt="music"
          width="50%"
          height="280"
          className="img"
        />
      </div>
      <br />
      <div className="home-wrap">
        <h1>VIDEOS</h1>
        <img
          src="./video.jpg"
          alt="video"
          width="50%"
          height="310"
          className="img"
        />
      </div>
      <br />
      <div className="home-wrap">
        <h1>MOVIES</h1>
        <img
          src="./movie.jpg"
          alt="movie"
          width="50%"
          height="310"
          className="img"
        />
      </div>
      <br />
      <div className="home-wrap">
        <h1>AUDIO BOOKS</h1>
        <img
          src="./audio-book.png"
          alt="audio"
          width="50%"
          height="310"
          className="img"
        />
      </div>
    </div>
  );
}

export default Home;
