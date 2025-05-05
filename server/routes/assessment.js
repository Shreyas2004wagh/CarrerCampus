import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Assessment from '../models/Assessment.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/submit', auth, async (req, res) => {
  try {
    const { subjects, skills } = req.body;
    const userId = req.user.id;

    // Generate career suggestions using Gemini AI
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
    });

    const prompt = `Based on the following information, suggest the top 3 most suitable careers:
    Subjects of interest: ${subjects.join(', ')}
    Skills assessment:
    - Teamwork: ${skills.teamwork}/5
    - Problem Solving: ${skills.problemSolving}/5
    - Creativity: ${skills.creativity}/5
    - Technical Skills: ${skills.technicalSkills}/5
    - Communication: ${skills.communication}/5
    
    For each career suggestion, provide:
    1. Job title
    2. Brief description
    3. Match score (percentage)
    Format the response as JSON.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const careers = JSON.parse(response.text());

    // Save assessment and career matches
    const assessment = new Assessment({
      user: userId,
      subjects,
      skills,
      careerMatches: careers
    });
    await assessment.save();

    res.json(careers);
  } catch (error) {
    res.status(500).json({ message: 'Error processing assessment', error: error.message });
  }
});

export default router;