var express = require('express');

var app = express();

// Respond with an HTML page for requests that hit the root "/"
app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin: 50px;
        }
        h1 {
          color: #333;
        }
        p {
          color: #555;
        }
      </style>
    </head>
    <body>
      <h1>Zal pan dakhvt nahi he?</h1>
      <p>Welcome to our server! This is a simple Express.js application.</p>
    </body>
    </html>
  `);
});

// Listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;
