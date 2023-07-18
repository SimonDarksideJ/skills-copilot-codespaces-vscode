// Create web server
// Start server with `node comments.js`
// View at http://localhost:3000

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Set up body-parser for JSON
app.use(bodyParser.json());

// Set up in-memory database
var comments = [];

// Set up routes
app.get('/comments', function (req, res) {
    res.send(comments);
});

app.post('/comments', function (req, res) {
    var comment = req.body;
    comments.push(comment);
    res.send(comment);
});

// Start server
app.listen(3000, function () {
    console.log('Server listening on port 3000');
});
