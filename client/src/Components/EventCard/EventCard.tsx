import './EventCard.scss';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { EventData } from '../../Interfaces/eventData'

function EventCard (props: { event: EventData, deleteEvent: (_id:string) => void}) {
  const formatDate = moment(props.event.date).format('MMMM Do YYYY');

  const history = useHistory();
  const handleClick = () => history.push(`/Eventdetails/${props.event._id}`);

  return (
    <div className='event-card'>
      <h3 className='event-occasion'>
        {props.event.occasion}
      </h3>
      <p className='event-date'>
        {formatDate}
      </p>
      <button data-testid='moreDetailsButton' className='event-card-button' type='button' onClick={handleClick}>
        More Details
      </button>
      <button data-testid='deleteButton' className='event-card-delete' type='button' onClick={() => props.deleteEvent(props.event._id)}>DELETE</button>
    </div>
  );
}

export default EventCard;
