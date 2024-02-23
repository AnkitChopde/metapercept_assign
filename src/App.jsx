import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import MidSection from './component/MiddleSection'
import CardSection from './component/CardSection'


function App() {
  

  return (
    <>
     <Navbar/>
     <MidSection/>
     <CardSection/>
    </>
  )
}

export default App
