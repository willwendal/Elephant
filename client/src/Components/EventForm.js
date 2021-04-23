import './EventForm.scss';

function EventForm() {
  
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

  // const buttonHandler = () => {
  //   setIsLoading(current => !current)
  // }
  
  
  
  return (
    <div className="addBookBox">
  
      <form onSubmit={ submitHandler }>
        <h1>Add Event</h1>
        <div className="form-title">
          <h3 className="form-header">
            Occasion
            <input onChange={(e) => {setOccasion(e.target.value)}} 
            value={occasion} 
            type="text"/>
          </h3>
        </div>
        <div className="form-first-name">
        <h3>
          Location
          <input onChange={(e) => {setLocation(e.target.value)}} 
          value={location} 
          type="text"/>
        </h3>
        </div>
        <div className="form-surname">
        <h3>
          Date
          <input onChange={(e) => {setDate(e.target.value)}} 
          value={date} 
          type="text"/>
        </h3>
        </div>
        <div>
          <button className="submit-button"type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EventForm
