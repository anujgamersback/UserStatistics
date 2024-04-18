import React from 'react'
import { Outlet } from 'react-router-dom'
import  Navbar  from './Navbar'

const Layout = () => {
  return (
    <div className='flex-1 overflow-y-auto'>
                <Navbar />

                <div className='p-4 2xl:px-10'>
                    <Outlet />
                </div>
            </div>
  )
}

export default Layout
