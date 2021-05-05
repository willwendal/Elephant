import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import CountdownTimer from '../../Components/CountdownTimer/CountdownTimer';
import { getDetails } from '../../services/APIservice';
import Navbar from '../../Components/NavBar/Navbar';
import Todo from '../../Components/Todos/Todos';
import { EventData } from '../../Interfaces/eventData';
import './EventDetails.scss';

function EventDetails () {
  const [selectedEvent, setSelectedEvent] = useState<EventData>({_id: '', occasion: '', location: '', date: ''});
  const { id } = useParams<{id: string}>();

  useEffect(() => {
    getDetails()
      .then((data) => {
        data.forEach(event => {
          if (event._id === id) setSelectedEvent(event);
        });
      });
  }, [id]);

  const formatDate = moment(selectedEvent.date).format('MMMM Do YYYY');

  return (
    <div>
      <Navbar />
      <CountdownTimer />
      <div className='Dashboard3-container'>
        <h1 className='dash3-occasion'>
          {selectedEvent.occasion}: {formatDate}
        </h1>
        <h1 className='dash3-location'>
          Location: {selectedEvent.location}
        </h1>
        <Todo />
      </div>
    </div>
  );
}

export default EventDetails;
