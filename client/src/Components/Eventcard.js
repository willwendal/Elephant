import './Eventcard.scss'

function Eventcard (props) {
  return (
    <div className='event-card'>
      <h3 className='event-occasion'>
        {props.occasion}
      </h3>
      <p className='event-date'>
        {props.date}
      </p>
    </div>
  )
}

export default Eventcard
