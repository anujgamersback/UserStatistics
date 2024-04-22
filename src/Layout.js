import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Header from "./components/Header";


const Layout = () => {
  return (
    <div className='flex-1 overflow-y-auto'>
      <Header />
      <div className='p-20 2xl:px-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
