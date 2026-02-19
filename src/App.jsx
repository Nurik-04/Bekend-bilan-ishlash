import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPgage from './Pages/AboutPgage'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='home' element={<HomePage/>}/>
          <Route path='about'element={<AboutPgage/>}/>
          <Route path='contact' element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
