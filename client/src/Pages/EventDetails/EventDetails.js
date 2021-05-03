import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import CountdownTimer from '../../Components/CountdownTimer/CountdownTimer';
import { getDetails } from '../../services/APIservice';
import Navbar from '../../Components/NavBar/Navbar';
import Todo from '../../Components/Todos/Todos';
import './EventDetails.scss';

function EventDetails () {
  const [event, setEvent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getDetails(id)
      .then((data) => {
        data.forEach(event => {
          if (event._id === id) setEvent(event);
        });
      });
  }, [id]);

  const formatDate = moment(event.date).format('MMMM Do YYYY');

  return (
    <div>
      <Navbar />
      <CountdownTimer />
      <div className='Dashboard3-container'>
        <h1 className='dash3-occasion'>
          {event.occasion}: {formatDate}
        </h1>
        <h1 className='dash3-location'>
          Location: {event.location}
        </h1>
        <Todo />
      </div>
    </div>
  );
}

export default EventDetails;
