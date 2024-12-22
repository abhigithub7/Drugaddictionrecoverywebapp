/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from "./context/AuthProvider.jsx"
import 'react-toastify/ReactToastify.css'
ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<AuthProvider>
<div className="dark:bg-black dark:text-white" >
<App />
</div>
</AuthProvider>

</BrowserRouter>
   
  
)
