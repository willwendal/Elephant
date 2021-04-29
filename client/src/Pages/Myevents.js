import Navbar from '../Components/Navbar'
import Dashboard from '../Components/Dashboard'
import { useEffect, useState } from 'react'
import { deleteHandler, getEvents } from '../services/APIservice'

function Myevents () {

  const [eventData, setEvent] = useState([])

  useEffect(() => {
    async function fetchData () {
      const data = await getEvents();
      setEvent(data)
      }
      fetchData()
  }, []) 

  const deleteEvent = async (id) => {
    await deleteHandler(id);
    setEvent(previousEvent => previousEvent.filter(event => event._id !== id))
  }

  return (
    <div>
      <Navbar />
      <Dashboard eventData={eventData} deleteEvent={deleteEvent}/>
    </div>
  )
}

export default Myevents
