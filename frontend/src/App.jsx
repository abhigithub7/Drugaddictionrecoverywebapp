/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./Home/Home"
import toast, { Toaster } from 'react-hot-toast';

import { Navigate, Route, Routes } from "react-router-dom"
import Abouts from "./About/Abouts"
import Login from "./components/Login"
import Admin from "./Admin/Admin"
import Services from "./Service/Services";
import Notifications from "./Notifications/Notification";
import Docters from "./docter/Docters";
import Contacts from "./Contact/Contacts";
import { useAuth } from "./context/AuthProvider";
import RegisterPage from "./components/Register";




function App() {
  const [authUser,setauthUser] = useAuth();
 console.log(authUser);
  return (
    <>
   {/* <Home/>
   <About/> */}
  <div>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<Abouts/>}/>
    <Route path="/Service" element={authUser?<Services/>:<Navigate to="/login"/>}/>
    <Route path="/Notifications" element={authUser?<Notifications/>:<Navigate to="/login" />}/>
    <Route path="/Docter" element={authUser?<Docters/>:<Navigate to="/login"/>}/>
    <Route path="/Contact" element={<Contacts/>}/>
    <Route path="/Admin" element={authUser?<Admin/>:<Navigate to="/login"/>}/>

    <Route path="/login" element={<Login/>}/>
    <Route path="/Register" element={<RegisterPage/>}/>
    


   </Routes>
   <Toaster />
  </div>
    </>
  )
}

export default App
