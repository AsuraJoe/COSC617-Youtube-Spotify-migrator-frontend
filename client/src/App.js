import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import './.App.css'
import Register from './pages/Register'
async function registerUser(event){
    window.location.href = '/register'
  }

  async function loginUser(event){
    window.location.href = '/login'
  }
const App = () =>{
    return <><div>
        <h1>Welcome to the Converter App</h1>
        <form onClick={registerUser}>
            <input type="Button" value="Go to Register" />
        </form>

        <form onClick={loginUser}>
            <input type="Button" value="Go to Login" />
        </form>
        <div>
            
        </div>
        <a href= "/home">Continue as guest </a>
    </div><BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter></>
        
    
   
}
export default App