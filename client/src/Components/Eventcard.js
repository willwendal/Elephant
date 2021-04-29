import './Eventcard.scss'
import { useHistory } from 'react-router-dom';
import moment from 'moment';

function Eventcard (props) {
  
  const formatDate = moment(props.date).format('MMMM Do YYYY');

  const history = useHistory();
  const handleClick = () => history.push(`/Eventdetails/${props._id}`);

  function deleteButton() {
    alert('Button works');
  }

  return (
    <div className='event-card'>
      <h3 className='event-occasion'>
        {props.occasion}
      </h3>
      <p className='event-date'>
        {formatDate}
      </p>
        <button className='event-card-button' type="button" onClick={handleClick}>
          More Details
        </button>
        <button onClick={deleteButton}>DELETE</button>
    </div>
  )
}

export default Eventcard
