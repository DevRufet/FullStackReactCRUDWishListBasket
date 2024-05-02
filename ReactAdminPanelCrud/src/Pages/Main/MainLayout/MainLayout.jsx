import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from '../MainNavbar/MainNavbar'

function MainLayout() {
  return (
  <>
   <MainNavbar/>
   <Outlet/>
  </>
  )
}

export default MainLayout