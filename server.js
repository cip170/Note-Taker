// Dependencies - importing express module
const express = require('express');

// Direct server to use routes for html files & APIs
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

// Create server by assigning express to 'app'
const app = express();

// Set PORT
const PORT = process.env.PORT || 3001;

// Middleware to complete request - response cycle
app.use(express.urlencoded({ extended: true })); // parses incoming requests with URL-encoded
app.use(express.json());

// static files in 'public'
app.use(express.static('public'));
// sets path for apiRoutes as /api
app.use('/api', apiRoutes);
// sets path for htmlRoutes as /
app.use('/', htmlRoutes);

// Listener for app to listen to PORT
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});