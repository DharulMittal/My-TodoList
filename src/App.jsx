import { useState } from 'react'
import './App.css'

import Nav from './components/Nav'
import Foot from './components/Foot'
import MainTodo from './components/MainTodo'

function App() {
  
  return (
    <>
      <Nav/>
      <MainTodo/>
      <Foot/>
    </>
  )
}

export default App
