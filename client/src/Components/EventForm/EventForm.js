import './EventForm.scss'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function EventForm ({ postEvent }) {
  const [occasion, setOccasion] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  const history = useHistory()

  async function submitAndNavigate (e) {
    e.preventDefault()
    if (occasion !== '' && location !== '' && date !== '') {
      await postEvent({ occasion, location, date })
      setOccasion('')
      setLocation('')
      setDate('')
      history.push('/Myevents')
    }
  }

  return (
    <div className='form-add-event'>

      <form onSubmit={submitAndNavigate}>
        <h1 className='form-event-header'>Add Event</h1>

        <h3 className='form-header'>
          Occasion
          <input
            required
            data-testid='occasion'
            className='input'
            onChange={(e) => { setOccasion(e.target.value) }}
            value={occasion}
            type='text'
          />
        </h3>

        <h3 className='form-location'>
          Location
          <input
            required
            data-testid='location'
            className='input'
            onChange={(e) => { setLocation(e.target.value) }}
            value={location}
            type='text'
          />
        </h3>

        <h3 className='form-date'>
          Date
          <input
            required
            data-testid='date'
            className='input-date'
            onChange={(e) => { setDate(e.target.value) }}
            value={date}
            type='date'
          />
        </h3>

        <div>
          <button data-testid='submitButton' className='submit-button' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EventForm
