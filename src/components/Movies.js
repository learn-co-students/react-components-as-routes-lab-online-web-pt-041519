import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
  {movies.map(m => <div className="movies">Title: {m.title} Time: {m.time} Genre: {m.genres}</div>)}
    </div>
  );
};

export default Movies;
