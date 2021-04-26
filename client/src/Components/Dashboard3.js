import './Dashboard3.scss';
import Todo from '../Components/Todos';


function Dashboard3(props) {

  return (
    <div className="Dashboard3-container">
      <h1 className="dash3-occasion">
        {props.eventData.occasion}: {props.eventData.date}
      </h1>
      <h1 className="dash3-location">
        Location: {props.eventData.location}
      </h1>
      <Todo />
    </div>
  )
}

export default Dashboard3
