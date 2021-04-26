import './Dashboard3.scss';
import Todo from '../Components/Todos';
import moment from 'moment';


function Dashboard3(props) {

  const formatDate = moment(props.eventData.date).format('MMMM Do YYYY');

  return (
    <div className="Dashboard3-container">
      <h1 className="dash3-occasion">
        {props.eventData.occasion}: {formatDate}
      </h1>
      <h1 className="dash3-location">
        Location: {props.eventData.location}
      </h1>
      <Todo />
    </div>
  )
}

export default Dashboard3
