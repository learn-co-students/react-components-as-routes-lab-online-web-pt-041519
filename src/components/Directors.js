import React from "react";
import { directors } from "../data";

const Directors = () => {
  // console.log(directors);
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, i) => (
        <div key={i}>
          <h1>{director.name}</h1>
          {director.movies.map((director, i) => (
            <p key={i}>{director}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Directors;
