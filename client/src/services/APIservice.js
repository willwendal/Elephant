const serverURL = "http://localhost:3000";
const URL = "http://localhost:3000/my-events"



export const postEventDB = (newEvent) => {
  return fetch(`${serverURL}/add-event`, {
    method: 'POST',
    body: JSON.stringify(newEvent),
    headers: {
      "Content-Type": 'application/json'
    }
  })
    .then(data => data.json())
    .then(event => event)
    .catch(err => console.log(err))
}

export const getDetails = () => {
  
  return fetch(`${serverURL}/my-events/`)
      .then((res) => {
        return res.json();
      })
}

export const deleteHandler = (id) => {
  console.log(id)
  const deleting = fetch(`${URL}/${id}`, {
    method: 'DELETE'
  });
  return deleting;
}

export const getEvents = async () => {
  return fetch(`${serverURL}/my-events`)
  .then(data=> data.json())
  .then(events => events)
  .catch(err => console.log(err))
}