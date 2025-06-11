import React, { useEffect } from 'react'
import Layout from './Components/Layout'
import Login from './Pages/Login/Login'
import { useNavigate } from 'react-router-dom'

function App() {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  useEffect(()=>{
    if (!token) {
      navigate("/login")
    }
  },[]) 
  return token ? <Layout/>:<Login/>
}

export default App