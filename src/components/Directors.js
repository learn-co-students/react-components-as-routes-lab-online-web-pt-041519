import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <React.Fragment >
      <h1>Directors Page</h1>
      {directors.map(director => {
       return(
              <div key={director.name}>
                  {director.name} 
                  <ul>
                      {director.movies.map(movie => {
                          return( 
                            <li key={director.name + Math.random() * (100 - 1)}>
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

export default Directors
