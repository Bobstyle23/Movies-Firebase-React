import React, { useRef } from "react";
import classes from "./AddMovie.module.css";

function AddMovie({ onAddMovie }) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");
  const producerRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingTextRef: openingTextRef.current.value,
      releaseDateRef: openingTextRef.current.value,
      producerRef: producerRef.current.value,
    };
    onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="date" id="date" ref={releaseDateRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="producer">Producer</label>
        <input type="text" id="producer" ref={producerRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
