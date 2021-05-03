import './AddEvent.scss';
import { useState } from 'react';
import Navbar from '../../Components/NavBar/Navbar';
import EventForm from '../../Components/EventForm/EventForm';
import { postEventDB } from '../../services/APIservice';

function AddEvent () {
  const [event, setEvent] = useState([]);

  async function postEvent (newEvent) {
    const createEvent = await postEventDB(newEvent);
    setEvent(prevState => [...prevState, createEvent]);
  }

  return (
    <div>
      <Navbar />
      <div className='dashboard-container2'>
        <EventForm postEvent={postEvent} />
      </div>
    </div>
  );
}

export default AddEvent;
