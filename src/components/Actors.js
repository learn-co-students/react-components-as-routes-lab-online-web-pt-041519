import React from 'react';
import { actors } from '../data';




const Actors = () => {

  const generateActors = () => {
    return actors.map(a => {
      return <div key={a.name}>
          <h1>{a.name}</h1>
          <ul>{a.movies.map( m => <li key={m}>{m}</li>)}</ul>
        </div>
    })
  }


  return (
    <div>
      <h1>Actors Page</h1>
      {generateActors()}
    </div>
  );
};

export default Actors;
