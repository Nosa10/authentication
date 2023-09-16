import { useState } from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import HomeGuest from './Pages/HomeGuest'
import './App.css'
import { Outlet } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
<link href='https://fonts.googleapis.com/css?family=Alex Brush' rel='stylesheet'></link>

function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/homeguest' element={<HomeGuest />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
