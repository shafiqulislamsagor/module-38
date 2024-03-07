// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task'
function App() {
  const namesArray = ['sagor','mustakim','habib','react'];

  return (
    <>
      
      <h1>Vite + React</h1>
      <Task name={"sakib khan"}></Task>
      <Task name={"obaidul"}></Task>
      {
        namesArray.map(name => <Task name={name}></Task>)
      }
    </>
  )
}

export default App
