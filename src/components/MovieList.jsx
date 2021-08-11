import React from "react";
import Movie from "./Movie";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  return (
    <ul className={classes["movie-list"]}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          producer={`Producer: ${movie.producer}`}
        />
      ))}
    </ul>
  );
};

export default MovieList;
