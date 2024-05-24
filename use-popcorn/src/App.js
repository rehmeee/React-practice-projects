import { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";





export default function App() {
  // const [query, setQuery] = useState("");
  // const [movies, setMovies] = useState(tempMovieData);
  // const [watched, setWatched] = useState(tempWatchedData);
  // const [isOpen1, setIsOpen1] = useState(true);
  // const [isOpen2, setIsOpen2] = useState(true);

  // const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  // const avgUserRating = average(watched.map((movie) => movie.userRating));
  // const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
    {/* // nav bar component  */}
      <Nav/>
      {/* // main component */}
    <Main />
          </>
  );
}
