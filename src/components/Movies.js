import React from "react";
import { movies } from "../data";

const Movies = () => {
  // console.log(movies);
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, i) => (
        <div key={i}>
          <h1>Name: {movie.title}</h1>
          <p>Time: {movie.time}</p>
          {movie.genres.map((genres, i) => (
            <p key={i}>{genres}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Movies;
