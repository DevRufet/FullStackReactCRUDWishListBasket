import React from 'react'
import { Link } from 'react-router-dom'
import './MainNavbar.scss'
function MainNavbar() {
  return (
    <>
    <div className='navbar'>
    <Link to={'/'}>Home</Link>
    <Link to={'employess'}>Employess</Link>
    <Link to={'/admin'}>Admin Panel</Link>
    <Link to={'favorities'}>Favorities</Link>
    </div>
   
    </>
  )
}

export default MainNavbar