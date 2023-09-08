import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import Hello from "./components/Hello"

const App = () => {
  const [message, setMessage] = React.useState("JavaScript is so cool.");
  const handleClick = () => {
    setMessage("Ok it changed");
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("New message")}>Change the message</button>
      <button onClick={handleClick}>Change the message</button>
      <Hello password={message} greeting="Howdy" setMessage={setMessage}/>
  </div>
  )

}

export default App

  
  


