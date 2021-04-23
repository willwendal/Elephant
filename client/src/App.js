import './App.scss'
import elephantLogo from './elephant-logo.jpeg'
import MyEvents from './Pages/Myevents'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App () {
  // useState isLoggedIn = false
  // {
  //   isLoggedIn ?
  //   <Switch>
  //   : <LoginPage>
  // }

  return (

    <div className='app-container'>
      <div className='app-elephant-logo'>
        <img src={elephantLogo} alt='elephant logo' />
        <p className='slogan'>Never Forget</p>
      </div>
      <div className='app-intro-text'>
        <p>Make sure never to miss another event, <br />
          Elephant will be here to remind you
        </p>
      </div>
      <div>
        <button className='app-button'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
