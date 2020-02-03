import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors)
  return (
    
    <div>
      <h1>Directors Page</h1>
        {directors.map(director => (
          <div>
          <h2>Name: {director.name}</h2>
          <p>movies: </p>
          {director.movies.map(movies => (
            <li>{movies}</li>
          ))}
          </div>
        ))}
    </div>
  );
}

export default Directors
