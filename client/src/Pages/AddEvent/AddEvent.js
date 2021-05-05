import './AddEvent.scss';
import Navbar from '../../Components/NavBar/Navbar';
import EventForm from '../../Components/EventForm/EventForm';
import { postEventDB } from '../../services/APIservice';

function AddEvent () {

  async function postEvent (newEvent) {
    await postEventDB(newEvent);
  }

  return (
    <div>
      <Navbar />
      <div className='dashboard-container2'>
        <EventForm postEvent={postEvent} />
      </div>
    </div>
  );
}

export default AddEvent;
