// create web server
const express = require('express');
const app = express();

// create a route to respond to the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the comments page!');
});

// create a route to respond to a GET request for the /comments URL
app.get('/comments', (req, res) => {
    res.send('Here are the comments');
});

// create a route to respond to a POST request for the /comments URL
app.post('/comments', (req, res) => {
    res.send('You have posted a comment');
});

// create a route to respond to a PUT request for the /comments URL
app.put('/comments', (req, res) => {
    res.send('You have updated a comment');
});

// create a route to respond to a DELETE request for the /comments URL
app.delete('/comments', (req, res) => {
    res.send('You have deleted a comment');
});

// start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// run the app and visit http://localhost:3000 in your web browser