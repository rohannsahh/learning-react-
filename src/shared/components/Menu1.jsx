import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu1 = () => {
  return (
    <div>
      
      <NavLink to="/">Home</NavLink><br />
      <NavLink to="/add-note"> Add Note</NavLink><br />
      <NavLink to="/view-all">View-All</NavLink><br />
      <NavLink to="/update-note">Update Note</NavLink><br />
      <NavLink to="/search-note">Search Note</NavLink><br />
    </div>
  )
}

export default Menu1
