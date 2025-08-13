import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import home from './home.jsx'
import AboutUs from './AboutUs.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'             
import mydisplayinfo from './mydisplayinfo.jsx'
import Employee from './Employee.jsx'
import './App.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Employee/>


    

  </StrictMode>,
)
