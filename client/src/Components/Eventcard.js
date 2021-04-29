import './Eventcard.scss'
import { useHistory } from 'react-router-dom';
import moment from 'moment';
// import { deleteHandler, getEvents } from '../services/APIservice'
// import { useEffect, useState } from 'react'


function Eventcard ({event, deleteEvent}) {
  // console.log(eventData)
  console.log(deleteEvent)

  // console.log({props})
  // const [events, setEvents] = useState([]);

  // useEffect( () => {
  //   async function fetchData () {
  //     const data = await getEvents();
  //     setEvents(data)
  //   }
  //   fetchData()
  // }, [])


  
  const formatDate = moment(event.date).format('MMMM Do YYYY');

  const history = useHistory();
  const handleClick = () => history.push(`/Eventdetails/${event._id}`);

  // const deleteEvent = async (id) => {
  //   await deleteHandler(id);
  //   setEvents(previousEvent => previousEvent.filter(event => event._id !== id))
  // }

  return (
    <div className='event-card'>
      <h3 className='event-occasion'>
        {event.occasion}
      </h3>
      <p className='event-date'>
        {formatDate}
      </p>
        <button className='event-card-button' type="button" onClick={handleClick}>
          More Details
        </button>
        <button type="button" onClick={() => deleteEvent(event._id)}>DELETE</button>
    </div>
  )
}

export default Eventcard
