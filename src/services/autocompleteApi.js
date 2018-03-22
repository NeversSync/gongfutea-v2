const API_URL = '/api/autocomplete';

export default {
  getPlace(place) {
    return fetch(`${API_URL}/${place}`, {
      method: 'POST',
      body: JSON.stringify(place),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => {
        console.log('autocomplete api response', response);
      })
      .catch(err => console.log(err));
  }
};