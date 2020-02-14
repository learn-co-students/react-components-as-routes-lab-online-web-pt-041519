import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
        	return <div>
	        	<p>Title: {movie.title}</p>
	        	<p>Time: {movie.time}</p>
	        	<ul>
	        	{movie.genres.map(genre => (<li>Genre: {genre}</li>))}   	
	        	</ul>
        	</div>
        })}
    </div>
  );
};

export default Movies;
