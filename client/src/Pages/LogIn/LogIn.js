import React, { useState } from 'react';
import './LogIn.scss'
import elephantLogo from '../../assets/elephant-logo.jpeg';
import { useHistory } from 'react-router-dom';


function LogIn () {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userLoginInfo = {username: username, password: password};
    if (userLoginInfo.username !== '' && userLoginInfo.password !== '') {
      // TODO: authentificate with server
      history.push('/Myevents');
    }
  }

  return (
    <div className='app-container'>
      <div className='app-elephant-logo'>
        <img src={elephantLogo} alt='elephant logo' />
        <p className='slogan'>Never Forget</p>
      </div>

      <div className="center">
        <form onSubmit={handleSubmit}>
          <label className="username">
            Username:
          </label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              data-testid="usernameInput" 
              className="input-username"
              required
              />
          <label className="password">
            Password:
            <input 
              type="text" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              data-testid="passwordInput" 
              className="input-username"
              required
              />
          </label>
          <button className='app-button' type="submit" > Sign in </button>
        </form>
      </div>

        <div className="register">
          <p>
            Not a user ? Click <span>here</span> to register 
          </p>
        </div>

      <div className='app-intro-text'>
        <p>Make sure never to miss another event, <br />
          Elephant will be here to remind you
        </p>
      </div>
    </div>
    
  )
}

export default LogIn