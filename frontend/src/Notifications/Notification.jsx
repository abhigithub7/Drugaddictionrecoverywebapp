/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Notifications from "../components/Notifications"
import Footer from "../components/Footer"
function Notification() {
  return (
    <>
    <div>
     <Navbar/>
    <div className="min-h-screen">
    <Notifications/>
    </div>
    <Footer/>

      </div>
      </>
  )
}

export default Notification
