import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <React.Fragment >
      <h1>Movies Page</h1>
      {movies.map(movie => {
       return(
              <div key={movie.title}>
                {movie.title} - Duration: {movie.time} min.
                  <ul>
                      {movie.genres.map(genre => {
                          return( 
                            <li key={movie.title + Math.random() * (100 - 1)}>
                              {genre}
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

export default Movies;
