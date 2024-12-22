/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "../components/Navbar"
import Docter from "../components/Docter"
import Footer from "../components/Footer"
function Docters() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <Docter/>
    </div>
    <Footer/>
    </>
  )
}

export default Docters