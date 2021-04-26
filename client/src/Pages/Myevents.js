import Navbar from '../Components/Navbar'
import Dashboard from '../Components/Dashboard'
import { useEffect, useState } from 'react'

function Myevents () {
  const [event, setEvent] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/my-events')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setEvent(data)
      })
  }, []) 


  return (
    <div>
      <Navbar />
      <Dashboard eventData={event} />
    </div>
  )
}

export default Myevents
