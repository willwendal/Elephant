import NewEvent from '../Interface/interface';

const { REACT_APP_URL } = process.env
const serverURL = REACT_APP_URL;



export const postEventDB = async (newEvent: NewEvent): Promise <NewEvent> => {
  try {
    const data = await fetch(`${serverURL}/add-event`, {
      method: 'POST',
      body: JSON.stringify(newEvent),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const event = await data.json();
    return event;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getDetails = async (): Promise <[Event]> => {
  const res = await fetch(`${serverURL}/my-events/`);
  return await res.json();
};

export const deleteHandler = async (id: string): Promise <Response> => {
  const deleting = await fetch(`${serverURL}/delete/${id}`, {
    method: 'DELETE'
  });
  return deleting;
};

export const getEvents = async (): Promise <[Event]> => {
  return await fetch(`${serverURL}/my-events`)
    .then(data => data.json())
    .then(events => events)
    .catch(err => console.log(err));
};
