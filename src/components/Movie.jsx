import React from "react";
import classes from "./Movie.module.css";

const Movie = ({ title, releaseDate, openingText, producer }) => {
  return (
    <div>
      <li className={classes.movie}>
        <h2>{title}</h2>
        <h3>{releaseDate}</h3>
        <p>{openingText}</p>
        <h5>{producer}</h5>
      </li>
    </div>
  );
};

export default Movie;
