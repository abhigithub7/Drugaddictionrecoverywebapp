/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { CgProfile } from "react-icons/cg";

import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const [theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
  const element=document.documentElement;
  useEffect(()=>{
    if(theme==="dark"){
      element.classList.add("dark")
      localStorage.setItem("theme","dark")
      document.body.classList.add("dark")
    }
    else{
      element.classList.remove("dark")
      localStorage.setItem("theme","light");
      document.body.classList.remove("dark")
      
    }
  },);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const user = {
    name: 'John Doe',
    progress: 78,
    soberDays: 45,
    mood: 'Good',
    goals: [
      { id: 1, name: 'Complete 60 days sober', progress: 45 },
      { id: 2, name: 'Attend 5 therapy sessions', progress: 3 },
    ],
  };
  

  return (
    <>
      <nav className="dark:bg-neutral-950 w-full border-bottom fixed z-50  p-5 bg-gray-100  shadow-xl">
     

          
        <div className="">
        
        
      <div className="flex md:justify-start justify-end    items-center max-w-1xl mx-auto">
        {/* Logo */}
      

        {/* Navbar Links (Desktop) */}
        
          <div className="flex ">
          <label className="swap mr-2 md:mr-4 swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="" value="synthwave" />
  
  {/* sun icon */}

  <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={()=>setTheme(theme==="light"?"dark":"light")}><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
    /></svg>
 
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={()=>setTheme(theme==="dark"?"light":"dark")}><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
  /></svg>
  
</label>
            <h1 className="">Health <span className="text-green-600">Drug</span></h1>
          </div>
          
        {/* Hamburger Menu (Mobile) */}
     
      </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-950 text-white p-4 space-y-4">
          <Link to="/" className="block">Dashboard</Link>
          <Link to="/profile" className="block">Profile</Link>
          <Link to="/progress" className="block">Progress</Link>
          <Link to="/support" className="block">Support</Link>
        </div>
      )}
    </nav>
    <div className="flex">
      {/* Sidebar for large screens */}
      <div
        className={`${
          isOpen ? "w-64" : "w-0"
        } bg-gray-300 dark:bg-neutral-900 dark:text-white text-black fixed top-0 left-0 h-full transition-width duration-300 md:w-64 md:block hidden`}
      >
        <div className="flex justify-center items-center py-6">
          <h2 className="text-xl font-semibold">Recovery Dashboard</h2>
        </div>
        <div className="px-6 py-4 space-y-4">
          <Link to="/" className="block py-2 hover:bg-blue-700 px-2 rounded-md">
            Dashboard
          </Link>
          <Link to="/profile" className="block py-2 hover:bg-blue-700 px-2 rounded-md">
            Profile
          </Link>
          <Link to="/progress" className="block py-2 hover:bg-blue-700 px-2 rounded-md">
            Progress
          </Link>
          <Link to="/support" className="block py-2 hover:bg-blue-700 px-2 rounded-md">
            Support
          </Link>
          <Link to="/settings" className="block py-2 hover:bg-blue-700 px-2 rounded-md">
            Settings
          </Link>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-100 dark:bg-neutral-900 dark:text-white text-black fixed top-0 left-0 w-full h-full z-50`}
        onClick={toggleSidebar}
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-center">Recovery Dashboard</h2>
        </div>
        <div className="px-6 py-4 space-y-4">
          <Link to="/" className="block py-2 hover:bg-blue-700 px-2 rounded-md">
            Dashboard
          </Link>
          <Link to="/profile" className="block py-2 hover:bg-blue-700 px-2 rounded-md">
            Profile
          </Link>
          <Link to="/progress" className="block py-2 hover:bg-blue-700 px-2 rounded-md">
            Progress
          </Link>
          <Link to="/support" className="block py-2 hover:bg-blue-700 px-2 rounded-md">
            Support
          </Link>
          <Link to="/settings" className="block py-2 hover:bg-blue-700 px-2 rounded-md">
            Settings
          </Link>
        </div>
      </div>

      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="md:hidden text-white fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        <svg
          className="w-8 h-8 text-black dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100  dark:bg-black border-white/50 ml-0 md:ml-64">
        <div className="mt-24"> {/* Your main content goes here */} </div>
      </div>
    </div>
    <div className=" ml-0 md:ml-64 bg-gray-100 dark:bg-neutral-950">
    <div className="md:max-w-6xl max-w-xs mx-auto bg-white dark:bg-neutral-900 shadow-lg rounded-lg overflow-hidden">
      <div className="bg-pink-800 h-32"></div>
      <div className="flex  justify-center -mt-16">
        <img
          className="w-24 h-24 object-cover rounded-full border-2 border-white"
          src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User Profile"
        />
      </div>
      <div className="text-center px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">Jane Doe</h2>
        <p className="text-gray-600 dark:text-gray-300">In Recovery</p>
        <p className="text-green-600 font-medium">128 Days Sober</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-center dark:text-gray-300 italic">
        One day at a time, one step at a time
        </p>
      </div>
      <div className="flex justify-center gap-4 pb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
          Support
        </button>
        <button className="bg-pink-800 text-white px-4 py-2 rounded-full hover:bg-pink-600">
          Check-in
        </button>
      </div>
    </div>

      {/* Recovery Progress */}
      <div className="grid grid-cols-1 m-5 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white dark:bg-neutral-900  p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Recovery Progress</h2>
          <div className="flex items-center">
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${user.progress}%` }}></div>
            </div>
            <span className="ml-2 text-lg font-semibold">{user.progress}%</span>
          </div>
        </div>

        <div className="bg-white  dark:bg-neutral-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Sober Days</h2>
          <p className="text-4xl font-bold">{user.soberDays} Days</p>
        </div>

        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Current Mood</h2>
          <div className="flex items-center">
            <div className="bg-green-500 text-white px-4 py-2 rounded-full">
              {user.mood}
            </div>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="bg-white dark:bg-neutral-900 p-6 m-5 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Goals</h2>
        {user.goals.map((goal) => (
          <div key={goal.id} className="mb-4">
            <h3 className="text-lg font-semibold">{goal.name}</h3>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${goal.progress}%` }}></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-sm text-gray-600">{goal.progress}% Completed</span>
              <span className="text-sm text-gray-600">Progress</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recovery Tips */}
      <div className="bg-white dark:bg-neutral-900 p-6 m-5 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recovery Tips</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Stay connected with support groups.</li>
          <li>Practice mindfulness and meditation.</li>
          <li>Set achievable daily goals.</li>
          <li>Track your emotions and triggers.</li>
          <li>Celebrate small victories along the way.</li>
        </ul>
      </div>
    </div>
    <footer className="dark:bg-neutral-950  bg-gray-200 text-white py-8 mt-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Section 1: About */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl text-gray-900 md:ml-48 ml-0 dark:text-gray-300 font-semibold mb-4">Addiction Recovery Support</h3>
            <p className="text-lg md:ml-48 ml-0 text-gray-900 dark:text-gray-300">
              Helping you on your path to recovery.  We offer resources, guidance, and professional support for overcoming addiction.
            </p>
          </div>

          {/* Section 2: Resources */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl text-gray-900 dark:text-gray-300 font-semibold mb-4">Resources</h4>
            <ul>
              <li>
                <a
                  href="https://www.samhsa.gov/find-help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-gray-900 dark:text-gray-300 transition-colors duration-200"
                >
                  SAMHSA - Substance Abuse and Mental Health Services
                </a>
              </li>
              <li>
                <a
                  href="https://www.addictioncenter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-gray-900 dark:text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Addiction Center - Support & Resources
                </a>
              </li>
              <li>
                <a
                  href="https://www.na.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-gray-900 dark:text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Narcotics Anonymous (NA)
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Information */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold dark:text-gray-300 text-gray-900 mb-4">Contact Us</h4>
            <ul>
              <li>
                <a
                  href="mailto:support@recoveryapp.com"
                  className="text-gray-400 hover:text-white dark:text-gray-300 text-gray-900 transition-colors duration-200"
                >
                  support@recoveryapp.com
                </a>
              </li>
              <li>
                <p className=" text-gray-900 dark:text-gray-300 text-gray-400">Phone: 1-800-123-4567</p>
              </li>
            </ul>
          </div>

       
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400 dark:text-gray-300 text-gray-900 text-sm">
            &copy; {new Date().getFullYear()} Addiction Recovery App. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default UserDashboard;
