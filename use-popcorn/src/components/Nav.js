import React from 'react'
import Logo from './Logo'
import Search from './Search'
import NumResults from './NumResults'

function Nav({children}) {
  return (
    <nav className="nav-bar">
       {children}
      </nav>
  )
}

export default Nav