import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <React.Fragment >
      <h1>Actors Page</h1>
      {actors.map(actor => {
       return(
              <div key={actor.name}>
                  {actor.name} 
                  <ul>
                      {actor.movies.map(movie => {
                          return( 
                            <li key={actor.name + Math.random() * (100 - 1)}>
                              {movie}
                            </li>
                          )
                        }
                      )
                    }
                  </ul>
              </div>
            )
          }
        )
      }
    </React.Fragment>
  );
};

export default Actors;


// {actors.map(actor =>{
//   return actor.movies.map(movie => {
//   return <li>{movie}</li>})
// })}