import React from 'react'
import Logo from './Logo'
import Search from './Search'
import NumResults from './NumResults'

function Nav() {
  return (
    <nav className="nav-bar">
        <Logo/>
        <Search/>
        <NumResults/>
      </nav>
  )
}

export default Nav