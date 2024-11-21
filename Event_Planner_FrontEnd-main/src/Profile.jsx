import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CardLayout from './CardLayout'
import Sidebar from './Sidebar'
import { useAuth } from './AuthProvider'
import { Navigate } from 'react-router-dom'
import HeroSection from './HeroSection'
const Profile = () => {
    const {curruser}=useAuth();
  return (
    curruser?<main className='m-0'>
         <Header name={curruser.email}/> 
         <CardLayout />
         <Footer/>
    </main>:<Navigate to='/'/>
  )
}

export default Profile