/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {

 const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) =>{
        const userInfo ={
            email: data.email,
            password: data.password,
        }
       await axios.post("http://localhost:5001/users/login",userInfo)
        .then((res)=>{
            console.log(res.data);
            
            if(res.data)
            {
                toast.success('Login Successfully.');
                localStorage.setItem("users",JSON.stringify(res.data.user));
                window.location.replace('/')
                

            }
        }).catch((err)=>{
            if(err.response)
                {
                    console.log(err);

                
                    toast.error(''+ err.response.data.message);
                    window.location.reload();


                }
            
        })
      }
        


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="max-w-md w-full bg-white  shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Welcome Back</h1>
                <p className="text-center text-gray-500 mb-6">We’re here to support you on your recovery journey.</p>
                <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...register("email", { required: true })}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
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
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        />
                    </div>
                  

                    <button
                         
                        type="submit"
                        className="w-full bg-pink-600 text-white py-2 px-4 rounded-md shadow hover:bg-pink-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
        
                        
                        Log In
    
                    </button>

                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don’t have an account?{' '}
                        <a href="/register" className="text-blue-600 hover:underline">
                            Sign up
                        </a>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        Forgot your password?{' '}
                        <a href="/reset-password" className="text-blue-600 hover:underline">
                            Reset it here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
