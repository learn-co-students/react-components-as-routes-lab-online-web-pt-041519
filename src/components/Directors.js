import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => <div className="director">Name: {d.name} Movies: {d.movies}</div>)}


    </div>
  );
}

export default Directors
