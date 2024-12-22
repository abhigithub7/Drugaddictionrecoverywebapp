/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
     
     <Navbar/>
     <div className="min-h-screen">
     <Banner/>
     </div>
     <Footer/>
     
  

    </>
   
  )
}

export default Home