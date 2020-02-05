import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        { movies.map((movie, index) => { 
            return <div key={index}> 
                Title: {movie.title}<br />
                Time: {movie.time}<br />
                Genre: { movie.genres.map((genre, index) => <ul key={index}>{genre}</ul>) }<br />
              </div> 
          }) 
        }
    </div>
  );
};

export default Movies;
