import './Dashboard.scss'
import EventCard from '../Components/Eventcard'

function Dashboard ({eventData, deleteEvent}) {
  return (
    <div className='dashboard-container'>
      {eventData.map((event) => {
        return <EventCard key={event._id} event={event}   deleteEvent={deleteEvent} />
      })}
    </div>
  )
}

export default Dashboard