import Navbar from '../Components/Navbar'
import Dashboard from '../Components/Dashboard'
import { useEffect, useState } from 'react'

function Myevents () {
  const [eventcards, setEventCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/my-events')
      .then((res) => {
        console.log(res.body)
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setEventCards(data)
      })
  }, []) 

  return (
    <div>
      <Navbar />
      <Dashboard eventData={eventcards} />
    </div>
  )
}

export default Myevents
