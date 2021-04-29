import './Dashboard.scss'
import EventCard from '../Components/Eventcard'

function Dashboard (props) {
  return (
    <div className='dashboard-container'>
      {props.eventData.map((event) => {
        return <EventCard key={event._id}  _id={event._id} occasion={event.occasion} date={event.date} />
      })}
    </div>
  )
}

export default Dashboard
