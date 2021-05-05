import { useEffect, useState } from 'react';
import { deleteHandler, getEvents } from '../../services/APIservice';
import Navbar from '../../Components/NavBar/Navbar';
import EventCard from '../../Components/EventCard/EventCard';
import EventData from '../../Interface/interface';
import './MyEvents.scss';

function MyEvents () {
  const [eventData, setEvent] = useState<EventData[]>([{_id: '', occasion: '', location: '', date: ''}]);

  useEffect(() => {
    async function fetchData () {
      const data = await getEvents();
      if (data !== undefined) setEvent(data);
    }
    fetchData();
  }, []);

  const deleteEvent = async (id: string): Promise <void> => {
    await deleteHandler(id);
    setEvent(previousEvent => previousEvent.filter(event => event._id !== id));
  };

  const eventList = eventData.map((event: EventData) => {
    return (
      <EventCard key={event._id} event={event} deleteEvent={deleteEvent} />
    );
  });

  return (
    <div>
      <Navbar />
      <div className='dashboard-container'>
        {eventList}
      </div>
    </div>
  );
}

export default MyEvents;
