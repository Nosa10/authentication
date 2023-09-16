import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   Router
//   RouterProvider,
// } from "react-router-dom"
import Login from './Pages/Login.jsx'
import Protected from './components/Protected.jsx'
import Home from './Pages/Home.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" index element={<App />}>
//       <Route path="/login" element={<Login />} />
//       <Route path="/" index element={<Home />} />
//     </Route>
//   )
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
