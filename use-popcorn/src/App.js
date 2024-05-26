import { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import NumResults from "./components/NumResults";
import Logo from "./components/Logo";
import Search from "./components/Search";
import ListBox from "./components/ListBox";
import WatchedMovies from "./components/WatchedMovies";
import MovieList from "./components/MovieList";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];




export default function App() {
  const [movies, setMovies] = useState(tempMovieData);



  return (
    <>
    {/* // nav bar component  */}
    {/* {so here we simple use the copmonent composition to find avoid the prop drilling} */}
      <Nav  >
        <Logo/>
        <Search/>
        <NumResults movies={movies}/>
      </Nav>
      {/* // main component */}
    <Main >
      <ListBox>
        <MovieList movies={movies}/>
       
      </ListBox>
      <WatchedMovies/>
    </Main>
          </>
  );
}
