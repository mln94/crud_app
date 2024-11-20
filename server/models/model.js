const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  channel: {
    type: String,
    enum: ['email', 'facebook', 'instagram', 'google-ads', 'linkedin'],
    required: true,
  },
  budget: {
    type: Number,
    required: true,
    min: 0,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  results: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true, // Ajoute createdAt et updatedAt
});

module.exports = mongoose.model('Campaign', campaignSchema);


