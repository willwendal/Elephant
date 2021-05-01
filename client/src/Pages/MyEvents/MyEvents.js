import { useEffect, useState } from 'react';
import { deleteHandler, getEvents } from '../../services/APIservice';
import Navbar from '../../Components/NavBar/Navbar';
import EventCard from '../../Components/EventCard/EventCard';
import './MyEvents.scss';

function MyEvents () {

  const [eventData, setEvent] = useState([])

  useEffect(() => {
    async function fetchData () {
      const data = await getEvents();
      if (data !== undefined) setEvent(data);
      }
      fetchData()
  }, []) 

  const deleteEvent = async (id) => {
    await deleteHandler(id);
    setEvent(previousEvent => previousEvent.filter(event => event._id !== id))
  }

    const eventList = eventData.map((event) => {
      return (
        <EventCard key={event._id} event={event} deleteEvent={deleteEvent} />
        )
    });

  return (
    <div>
      <Navbar />
      <div className='dashboard-container'>
        {eventList}
      </div>
    </div>
  )
}

export default MyEvents
