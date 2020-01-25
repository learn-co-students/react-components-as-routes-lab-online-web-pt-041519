import React from 'react';
import { movies } from '../data';

const movieCard = () => {
    return (movies.map(movie =>{
     return( <div>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map(genre => <ul>{genre}</ul>)}
      </div>)
    }))
      
}

const Movies = () => {
  return (
    <div>
       <h1>Movies Page</h1>
       {movieCard()}
    </div>
  );
};

export default Movies;
