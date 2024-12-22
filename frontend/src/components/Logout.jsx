/* eslint-disable no-unused-vars */
import React from 'react'
import { useAuth } from "../context/AuthProvider";
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setauthUser] = useAuth();
    const handlLogout =()=>{
        try
        {
            setauthUser({
                ...authUser,
                user:null,
            })
            localStorage.removeItem('users');
            toast.success("Logout succesfully");
            window.location.reload();
        } catch(error){
            toast.error("Error: ", + error.message)
            window.location.reload();
        }


    }
  return (
    <div>
      <button
      onClick={handlLogout}
       className='font-bold text-red-700'>Log out</button>
    </div>
  )
}

export default Logout
