import Navbar from '../Components/Navbar'
import Dashboard from '../Components/Dashboard'
import { useEffect, useState } from 'react'
import { deleteHandler } from '../services/APIservice'


function Myevents () {
  const [eventData, setEvent] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/my-events')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setEvent(data)
      })
  }, []) 

  const deleteEvent = async (id) => {
    console.log(id)
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
