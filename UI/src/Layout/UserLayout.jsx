import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/User/Navbar'

const UserLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default UserLayout