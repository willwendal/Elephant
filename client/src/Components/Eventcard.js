import './Eventcard.scss'
import { useHistory } from 'react-router-dom';

function Eventcard (props) {
  

  const history = useHistory();
  const handleClick = () => history.push(`/Eventdetails/${props._id}`);

  return (
    <div className='event-card'>
      <h3 className='event-occasion'>
        {props.occasion}
      </h3>
      <p className='event-date'>
        {props.date}
      </p>
        <button className='event-card-button' type="button" onClick={handleClick}>
          Get Started
        </button>
    </div>
  )
}

export default Eventcard
