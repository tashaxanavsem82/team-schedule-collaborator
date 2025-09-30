const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  attendees: [{ type: String }],
  createdBy: { type: String, required: true }
});

module.exports = mongoose.model('Event', eventSchema);