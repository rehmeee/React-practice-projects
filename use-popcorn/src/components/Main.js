import React from 'react'
import ListBox from './ListBox'
import WatchedMovies from './WatchedMovies'

function Main({children} ) {

  return (
    // this is main component
    <main className="main">
       {children}
      </main>

  )
}

export default Main