const serverURL = "http://localhost:3000";

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

