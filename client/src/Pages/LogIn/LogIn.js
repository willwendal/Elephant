import './LogIn.scss'
import elephantLogo from '../../assets/elephant-logo.jpeg';
import { useHistory } from 'react-router-dom';


function LogIn () {
  
  const history = useHistory();
  const handleClick = () => history.push('/Myevents');

  return (

    <div className='app-container'>
      <div className='app-elephant-logo'>
        <img src={elephantLogo} alt='elephant logo' />
        <p className='slogan'>Never Forget</p>
      </div>
      <h3 className="username">
            Username:
            <input className="input-username"/>
          </h3>
        
        
        <h3 className="password">
          Password:
          <input type="password" className="input-password" />
        </h3>

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
  
      <div>
        <button className='app-button' type="button" onClick={handleClick}>
          Sign in
        </button>
      </div>
    </div>
  )
}

export default LogIn