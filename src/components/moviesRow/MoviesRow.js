import React, { useState, useEffect } from "react";
import "./moviesRow.css";
import axios from "../../axios";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const imageUrl = "https://image.tmdb.org/t/p/original";

const MoviesRow = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      const data = request.data.results;
      setMovies(data);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const params = new URLSearchParams(new URL(url).search);
          console.log(params);
          setTrailerUrl(params.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    maxHeight: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="moviesRow">
      <h2 className="moviesRow__title">{title}</h2>
      <div className="moviesRow__slider">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              className={`moviesRow__poster ${
                !isLarge && "moviesRow__poster--sm"
              }`}
              key={movie.id}
              src={`${imageUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default MoviesRow;
