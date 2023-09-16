import { useState } from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
<link href='https://fonts.googleapis.com/css?family=Alex Brush' rel='stylesheet'></link>

function App() {
  return (
    <div className='app'>
      <Outlet />
    </div>
  )
}

export default App
