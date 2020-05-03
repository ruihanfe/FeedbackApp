const express = require('express');
const app = express();

// error function
// app: Express App to register this route handler with
// get: watch for incoming requests with this method
// '/' : watch for requests trying to access '/'
// req: object representing the incoming requests
// res: object  representing the outgoing response
// res.send: Immediately send some JSON back to who ever made thie requests.
app.get('/', (req, res) =>{
  res.send({hi : 'there'});
});
// environment variables
const PORT = process.env.PORT || 5000;
app.listen(PORT);
