import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const generateDirectors = () => {
    return directors.map(d => {
      return <div key={d.name}>
          <h1>{d.name}</h1>
          <ul>{d.movies.map( m => <li key={m}>{m}</li>)}</ul>
        </div>
    })
  }


  return (
    <div>
      <h1>Directors Page</h1>
      {generateDirectors()}
    </div>
  );
}

export default Directors
