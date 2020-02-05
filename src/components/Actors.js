import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
        <h1>Actors Page</h1>
        { actors.map((actor, index) => { 
            return <div key={index}> 
                Name: {actor.name}<br />
                Movies: { actor.movies.map((movie, index) => <ul key={index}>{movie}</ul>) }<br />
              </div> 
          }) 
        }
    </div>
  );
};

export default Actors;
