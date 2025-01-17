// Create web server
const express = require('express');
const app = express();

// create a route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/comments', (req, res) => {
  res.send('comments');
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});