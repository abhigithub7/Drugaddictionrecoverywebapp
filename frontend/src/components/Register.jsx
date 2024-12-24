/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {Link} from 'react-router-dom'

const RegisterPage = () => {

   

    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) => {
        const userInfo ={
            fullname:data.fullname,
            email:data.email,
            password: data.password
            
        }
       await axios.post(`http://localhost:5001/users/register`,userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data)
            {
                toast.success('Successfully Register');
                localStorage.setItem("users",JSON.stringify(res.data.user));
                window.location.replace('/')
            }
        }).catch((err)=>{
            if(err.response)
                {
                    console.log(err);
                    toast.error('user already exits ! ' );
            
                }
            
        })
      }
        
           
    

 
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Create an Account</h1>
                <p className="text-center text-gray-500 mb-6">Join us and take the first step towards recovery.</p>
                <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                        
                            type="text"
                            id="name"
                            name="name"
                            {...register("fullname", { required: true })}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-700"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                 
                            type="email"
                            id="email"
                            name="email"
                            required
                            {...register("email", { required: true })}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-700"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                        
                            type="password"
                            id="password"
                            name="password"
                            required
                            {...register("password", { required: true })}
                            
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-gray-700"
                        />
                    </div>

                    <button 
                   
                    
                        type="submit"
                        className="w-full bg-pink-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        
                         
                        Sign Up

                    </button>
                </form>
              <ToastContainer/>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <a  href="/login" className="text-green-600 hover:underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
