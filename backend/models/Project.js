const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [{ type: String }],
  githubUrl: { type: String },
  liveUrl: { type: String },
  category: { type: String, default: 'fullstack' },
  emoji: { type: String, default: '🚀' },
  bg: { type: String, default: 'linear-gradient(135deg,#0d2137,#1a3a5c)' }
});

module.exports = mongoose.model('Project', projectSchema);
