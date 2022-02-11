import React from "react";
import HeroCarousel from "react-hero-carousel";

export default () => (
  <HeroCarousel  interval={8000} height="30em">
    <img
      src="./images/music.jpg"
      width="60%"
      height="100%"
      alt="music wallpaper"
    />
    <img
      src="./images/videos.jpg"
      width="60%"
      height="100%"
      alt="video wallpaper"
    />
    <img
      src="./images/movies.jpg"
      width="60%"
      height="100%"
      alt="movie wallpaper"
    />
    <img
      src="./images/audio-books.jpg"
      width="60%"
      height="100%"
      alt="audio book wallpaper"
    />
  </HeroCarousel>
);