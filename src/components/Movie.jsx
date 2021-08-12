import React from "react";
import classes from "./Movie.module.css";

const Movie = ({
  title,
  releaseDate,
  openingText,
  producer,
  date,
  addedBy,
  onDelete,
}) => {
  return (
    <div>
      <li className={classes.movie}>
        <h2>{title}</h2>
        <h3>{releaseDate}</h3>
        <p>{openingText}</p>
        <h5>{producer}</h5>
        <small>{`Movie Added date: ${date}`}</small>
        <p>{`Added by: ${addedBy}`}</p>
        <button onClick={onDelete}>Delete</button>
      </li>
    </div>
  );
};

export default Movie;
