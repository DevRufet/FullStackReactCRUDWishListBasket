import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Pages/Main/MainLayout/MainLayout';
import Home from './Pages/Main/Home/Home';
import Employess from './Pages/Main/Employess/Employess';
import Favorities from './Pages/Main/Favorities/Favorities';
import AdminLayout from './Pages/Admin/AdminLayout/AdminLayout';
import AdminEmployess from './Pages/Admin/AdminEmployess/AdminEmployess';
import AddEmployess from './Pages/Admin/AddEmployess/AddEmployess';
import LogOut from './Pages/Admin/LogOut/LogOut';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function App() {
  

  return (
    <>
    <HelmetProvider>
      <BrowserRouter>
      <Routes>
        {/* My Main Routes */}
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="employess" element={<Employess />} />
          <Route path="favorities" element={<Favorities />} />
        </Route>
    {/* My Admin Routes */}
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<Home />} />
          <Route path="/admin/adminemployess" element={<AdminEmployess />} />
          <Route path="/admin/addemployess" element={<AddEmployess />} />
          <Route path="/admin/logout/:id" element={<LogOut />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </>
  )
}

export default App
