import React from "react";
import { actors } from "../data";

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {/* {console.log(actors)} */}
      {actors.map((actor, i) => (
        <div className="actor" key={i}>
          <h1>{actor.name}</h1>
          {actor.movies.map((movie, i) => (
            <p key={i}>{movie}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Actors;
