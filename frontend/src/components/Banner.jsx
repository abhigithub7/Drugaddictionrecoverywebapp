/* eslint-disable no-unused-vars */import React, { useEffect, useState } from 'react'

import img from '../../public/kisspng-health-care-nursing-home-care-nursing-care-home-ca-5b0ce64013e6a4.3215179515275720320815.png'
import img2 from '../../public/Aftercare-and-Support-Program-Fo.jpg'
import { MdArticle } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { TfiVideoClapper } from "react-icons/tfi";
import Login from "./Login"

import { Link } from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 
  return (
    <>
    <div className=" banner   max-h-screen    container mx-auto md:px-20 px-6  flex flex-col md:flex-row my-2 md:my-20">
      <div  className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36 ">
        <div className="space-y-2 md:space-y-4">
       <h2 className=" text-3xl md:text-5xl "> Hello, Welcome to <span className="text-pink-500">Drug</span> <span className="text-green-300">Addiction</span> <span>Recovery</span></h2>
       
      <h1 className="text-xl md:text-2xl">We’re here to support you on your journey to recovery.</h1>
    
        
      <p  className="text-sm md:text-xl">At Drug Addiction Recovery, we understand that recovery is a personal and unique path. Our app provides you with the tools, resources, and community you need to make meaningful progress and build a healthier, more fulfilling life.</p>
     </div>
 
   
  
   <div className=" mt-5">
    <a className='btn bg-pink-800 text-white' href="/Register">Join Now</a>
   </div>
  
      </div>
      <div className=" order-1  md:w-1/2 ml-1 mt-16   md:ml-48 item-center">
        <img src={img} className=" img " />
      </div>
 
      </div>

      {/* second section */}
      <section className="py-16   px-8">
        <h2 className="text-2xl font-bold pt-24 text-center mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row  justify-center gap-8">
          {["Connect", "Plan", "Recover"].map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 shadow-md rounded-lg p-12 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{step}</h3>
              <p className="text-gray-600 dark:text-gray-200">
                {`Step ${index + 1}: Brief description about ${step}.`}
              </p>
            </div>
          ))}
        </div>
      </section>
  


      {/* third section */}
      <div className=" banner   max-h-screen mt-32  container mx-auto  flex flex-col md:flex-row my-20">
      <div  className="w-full order-1 md:order-1 md:w-1/2 mt-12 md:mt-30 ">
        <div className=" h-[] mt-5">
          <img src={img2} className="im " alt="" />
         
       
        
     </div >
 
     
  
  
      </div>
      <div className=" order-2 w-full md:w-1/2 ml-1 px-3 md:px-0 mt-12 text-xl space-y-7 h-full md:ml-12 ">
       <h2 className="text-xl md:text-xl"> <span className="text-xl md:text-2xl font-semibold "> Personalized Goal Setting :</span> Track your progress and celebrate milestones along the way.</h2>
        <h2 className="text-xl md:text-xl"> <span className="text-xl md:text-2xl font-semibold"> Daily Journaling :</span> Reflect on your journey and stay connected with your thoughts and feelings.
        </h2>
        <h2 className="text-xl md:text-xl"> <span className="text-xl md:text-2xl font-semibold"> Educational Resources :</span> Access a wealth of articles, videos, and guides to support your recovery.
        </h2>
        <h2 className="text-xl md:text-xl"> <span className="text-xl md:text-2xl font-semibold"> Community Support :</span> Connect with others who understand your journey and find encouragement and advice.
        </h2>
        <h2 className="text-xl md:text-xl"> <span className="text-xl md:text-2xl font-semibold"> Professional Help :</span> Easily find and reach out to therapists and support groups.
        </h2>
       
      </div>
 
      </div>
      <div className="md:max-h-screen h-auto  py-12 md:mt-0 mt-48 container mx-auto md:px-20" >
        <div className="grid grid-cols-1 p-4 md:grid-cols-5 gap-y-6 md:gap-x-6 transition-all">
          <div className="box pointer p-5  dark:bg-black rounded  bg-gray-50 border shadow">
          <MdArticle className="text-6xl" />


             <h1 className="text-xl  font-semibold py-3">Articles</h1>
             <p className="justify-content"
             >Drug addiction recovery is a complex process that often requires a multi-faceted approach. Traditional recovery  and support groups.</p>
          </div>
          <div className="box p-5 dark:bg-black rounded bg-gray-50 border shadow">
          <TfiVideoClapper className="text-6xl" />

          <h1 className="text-xl font-semibold py-3">Motivation</h1>

             <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Alias perspiciatis
               eius voluptas officiis earum itaque quas laboriosam!</p>

          </div>
          <div className="box p-5 dark:bg-black rounded border bg-gray-50 shadow">
          <GiMedicines className="text-6xl" />

          <h1 className="text-xl font-semibold py-3">Medicine</h1>
             <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Alias perspiciatis
               eius voluptas officiis earum itaque quas laboriosam!</p>

          </div>
          <div className="box p-5 border bg-gray-50 rounded dark:bg-black shadow">
          <GiProgression className="text-6xl" />

          <h1 className="text-xl font-semibold py-3">Progress Track</h1>
             <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Alias perspiciatis
               eius voluptas officiis earum itaque quas laboriosam!</p>

          </div>
          <div className="box p-5 dark:bg-black rounded border bg-gray-50 shadow ">
          <FaUserDoctor className="text-6xl" />

          <h1 className="text-xl font-semibold py-3">Docter</h1>
             <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Alias perspiciatis
               eius voluptas officiis earum itaque quas laboriosam!</p>

          </div>
         
        </div>

      </div>

    {/* Accortion */}
    <section className="bg-gray-100 dark:bg-neutral-950 py-16 px-8">
        <h2 className="text-2xl font-bold text-center mb-8">What People Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {[
            "This app changed my life!",
            "I finally found a community that understands me.",
            "The resources are incredibly helpful.",
          ].map((quote, index) => (
            <blockquote
              key={index}
              className="bg-white dark:bg-neutral-900 shadow-md rounded-lg p-6 text-center"
            >
              <p className="italic text-gray-700 dark:text-gray-200">{quote}</p>
              <footer className="mt-4 text-gray-500 dark:text-gray-300">- Anonymous</footer>
            </blockquote>
          ))}
        </div>
      </section>

  

     
    </>
    
  )
}

export default banner
