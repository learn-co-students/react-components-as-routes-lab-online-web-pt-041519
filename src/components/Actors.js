import React from 'react';
import { actors } from '../data';

const renderActors = () => {
  return(
    actors.map(a =>{
      return(
      <div>
      <h3>{a.name}</h3>
      {a.movies.map(m => <ul key={m}>{m}</ul>)}
      </div>
      )
    })
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
