
Express.js Middleware (5 points):
● Create an Express.js middleware that logs the timestamp and the
requested URL for every incoming request.


  Express.js middleware that not only logs the timestamp and requested URL but also includes additional information such as the HTTP method, request parameters, query parameters, request headers, and response status.



  js:

const express = require('express');
const moment = require('moment'); // For timestamp formatting

const app = express();
const port = 3000;

// Custom middleware function to log detailed information for every incoming request
const logRequestDetails = (req, res, next) => {
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  const method = req.method;
  const url = req.originalUrl;
  const params = req.params;
  const query = req.query;
  const headers = req.headers;

  console.log(`[${timestamp}] ${method} ${url}`);
  console.log('Request Parameters:', params);
  console.log('Query Parameters:', query);
  console.log('Request Headers:', headers);

  // Intercept the response to log the status
  res.on('finish', () => {
    console.log(`[${timestamp}] Response Status: ${res.statusCode}`);
  });

  next();
};

// Use the custom middleware for all incoming requests
app.use(logRequestDetails);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/example/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Example route with ID: ${id}`);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



..............................................................................................................................................................................


Explanation:

Additional Information:
The middleware now logs the HTTP method, request URL, request parameters, query parameters, and request headers.
The moment library is used for timestamp formatting.

Intercepting the Response:
The middleware uses res.on('finish', ...) to intercept the response and log the status after the response is sent.

Usage of Moment Library:
The moment library is used for formatting the timestamp. You can install it using npm install moment.









