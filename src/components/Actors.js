import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map( (a, i) => {
        return (
          <div>
            <h2>Name: {a.name}</h2>
            <ul>
              {a.movies.map( (m, i) => { return <li>{m}</li>})}
            </ul>  
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
