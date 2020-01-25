import React from 'react';
import { directors } from '../data';

const renderDirectors = () => {
  return(directors.map(d => {
    return(
      <div>
      <h3>{d.name}</h3>
      {d.movies.map(m => <ul>{m}</ul>)}
    </div>
    )
  }))
}


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
