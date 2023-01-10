import React from 'react'
import '../Navbar/navitem.scss'

function NavItem(props) {
  return (
    <div>{props.children}</div>
  )
}

export default NavItem