const express = require('express');
const router = express.Router();
const superAgent = require('superagent');

router.get('/autocomplete', (request, response) => {
  console.log(request, 'testing');
});

router.post('/autocomplete/:place', (request, response) => {
  const place = request.params.place;
  superAgent
    .get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${place}&key=${process.env.REACT_API_GOOGLE_API_KEY}`
    )
    .then(data => {
      console.log('were here', data);
      response.send(data);
      // TODO: Use a section of this data Object on frontend for autosuggest
    })
    .catch(err => console.log(err));
});

module.exports = router;