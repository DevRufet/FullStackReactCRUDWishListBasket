import React from 'react'
import { Link } from 'react-router-dom'
import './AdminNavbar.scss'
function AdminNavbar() {
  return (
    <>
    <div className='navbar'><Link to={'/'}>Main Site</Link>
    <Link to={'/admin/adminemployess'}>Employess</Link>
    <Link to={'/admin/addemployess'}>Add Employess</Link>
    <Link to={'/admin/logout'}>Edit</Link>
    </div>
    
    
    </>
  )
}

export default AdminNavbar