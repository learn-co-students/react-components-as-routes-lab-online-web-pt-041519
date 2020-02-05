import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
        <h1>Directors Page</h1>
        { directors.map((director, index) => { 
            return <div key={index}> 
                Name: {director.name}<br />
                Movies: { director.movies.map((movie, index) => <ul key={index}>{movie}</ul>) }<br />
              </div> 
          }) 
        }
    </div>
  );
}

export default Directors
