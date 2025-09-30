const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/team-schedule';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 10000, useFindAndModify: false, useCreateIndex: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.log(err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});