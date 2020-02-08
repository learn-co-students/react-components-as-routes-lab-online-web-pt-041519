import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const generateMovies = () => {
    return movies.map(m => {
      return <div key={m.title}>
          <h1>{m.title}</h1>
          <h3>{m.time}</h3>
          <ul>{m.genres.map( g => <li key={g}>{g}</li>)}</ul>
        </div>
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {generateMovies()}
    </div>
  );
};

export default Movies;
