import React from 'react'
import ListBox from './ListBox'
import WatchedMovies from './WatchedMovies'

function Main({movies} ) {

  return (
    // this is main component
    <main className="main">
        <ListBox movies={movies}/>
        <WatchedMovies/>
      </main>

  )
}

export default Main