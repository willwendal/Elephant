import './EventCard.scss'
import { useHistory } from 'react-router-dom';
import moment from 'moment';

function Eventcard ({event, deleteEvent}) {

  const formatDate = moment(event.date).format('MMMM Do YYYY');

  const history = useHistory();
  const handleClick = () => history.push(`/Eventdetails/${event._id}`);

  return (
    <div className='event-card'>
      <h3 className='event-occasion'>
        {event.occasion}
      </h3>
      <p className='event-date'>
        {formatDate}
      </p>
        <button data-testid="moreDetailsButton" className='event-card-button' type="button" onClick={handleClick}>
          More Details
        </button>
        <button data-testid="deleteButton" type="button" onClick={() => deleteEvent(event._id)}>DELETE</button>
    </div>
  )
}

export default Eventcard
