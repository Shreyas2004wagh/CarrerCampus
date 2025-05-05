import mongoose from 'mongoose';

const assessmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  subjects: [{
    type: String,
    required: true
  }],
  skills: {
    teamwork: Number,
    problemSolving: Number,
    creativity: Number,
    technicalSkills: Number,
    communication: Number
  },
  careerMatches: [{
    title: String,
    description: String,
    matchScore: Number
  }]
}, { timestamps: true });

export default mongoose.model('Assessment', assessmentSchema);