import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
  {actors.map(a => <div className="actor">Name: {a.name} Movies: {a.movies}</div>)}
    </div>
  );
};

export default Actors;
