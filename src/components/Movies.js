import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map( (m, i) => {
        return (
          <div key={i}>
            <h2>Name: {m.title}</h2>
            Time: {m.time}
            <ul>
              {m.genres.map( (g, i) => {return <li key={i}>{g}</li>})}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
