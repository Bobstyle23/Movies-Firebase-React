import { useState } from "react";

function useMovies() {
  const [movies, setMovies] = useState([]);

  return [movies, setMovies];
}

export default useMovies;
