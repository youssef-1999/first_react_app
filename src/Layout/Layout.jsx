import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'

function Layout() {
  return (
    <div>
      <Navbar/>
        <Outlet/>
        <Home/>
      <Footer/>
    </div>
  )
}

export default Layout
