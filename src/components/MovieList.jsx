import React, { useState } from "react";
import Movie from "./Movie";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  const date = new Date();
  const currentDate = date.getFullYear();
  const author = "Bob";

  const [deleteMovies, setDeleteMovies] = useState([]);

  const movieDeleteHandler = (movie) => {
    const deleteMovie = deleteMovies.filter(deleteMovies.id !== movie.id);
    setDeleteMovies(deleteMovie);
  };
  return (
    <ul className={classes["movie-list"]}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          producer={`Producer: ${movie.producer}`}
          date={currentDate}
          addedBy={author}
          onDelete={movieDeleteHandler}
        />
      ))}
    </ul>
  );
};

export default MovieList;
