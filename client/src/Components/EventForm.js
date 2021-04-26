import './EventForm.scss';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


function EventForm({postEvent}) {
  
  const [ occasion, setOccasion ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ date, setDate ] = useState('');
  
  
  
  const submitHandler = async (e) => {
    
    e.preventDefault();
    
    await postEvent({occasion, location, date})
    
    setOccasion('');
    setLocation('');
    setDate('');


  }
  
  const history = useHistory();
  const handleClick = () => history.push('/Eventdetails/:id');
  

  function submitAndNavigate (e) {
    submitHandler(e);
    handleClick();
  }
  
  
  
  return (
    <div className="form-add-event">
  
      <form onSubmit={ submitAndNavigate }>
        <h1 className="form-event-header">Add Event</h1>
        <div className="form-header-container">
          <h3 className="form-header">
            Occasion
            <input className="input" onChange={(e) => {setOccasion(e.target.value)}} 
            value={occasion} 
            type="text"/>
          </h3>
        </div>
        <div className="form-location-container">
        <h3 className="form-location">
          Location
          <input className="input" onChange={(e) => {setLocation(e.target.value)}} 
          value={location} 
          type="text"/>
        </h3>
        </div>
        <div className="form-date-button-container">
        <h3 className="form-date">
          Date
          <input className="input-date" onChange={(e) => {setDate(e.target.value)}} 
          value={date} 
          type="date"/>
        </h3>
        </div>
        <div>
          <button className="submit-button"type="submit" onClick={submitAndNavigate} >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EventForm
