import CountdownTimer from '../Components/CountdownTimer';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Dashboard3 from '../Components/Dashboard3';
import { getDetails } from '../services/APIservice';
import Todo from '../Components/Todos';

function Eventdetails() {
  
  const [event, setEvent] = useState({})
  const { id } = useParams();

  useEffect(() => {
    getDetails(id)
      .then((data) => {
        data.forEach(event => {
          if (event._id === id) setEvent(event)
        
        });
      })
  }, []) 

  
  return (
    <div>
      <CountdownTimer />
      <Dashboard3 eventData={event} />
    </div>
  )
}

export default Eventdetails
