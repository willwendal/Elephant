const serverURL = "http://localhost:3000/add-event";

export const postEventDB = (newEvent) => {
  return fetch(serverURL, {
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