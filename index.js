var express = require('express');

var app = express();

// Respond with an HTML page for requests that hit the root "/"
app.get('/', function (req, res) {
  res.send(`
    <h1>Zal pan dakhvt nahi he?</h1>
    `);
});

// Listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;
