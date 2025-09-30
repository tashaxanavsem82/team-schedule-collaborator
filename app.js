const express = require('express');
const cors = require('cors');
const eventsRoute = require('./routes/events');

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
});
app.use('/api/events', eventsRoute);

module.exports = app;