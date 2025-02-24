import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import NoPage from './pages/NoPage'

function App() {

  const [darkMode, setDarkMode] = useState()

  
  let theme = darkMode ? 'light' : 'dark';
  

  return (
    <>
      <div className={`${theme} h-screen bg-quinary dark:bg-secondary`}>
        <BrowserRouter>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="*" element={<NoPage/>}></Route>
          </Routes>
        </BrowserRouter>
        <h1>SOMETHING</h1>
      </div>
    </>
  )
}

export default App

