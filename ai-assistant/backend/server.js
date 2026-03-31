const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key is not configured.' });
  }

  try {
    // TODO: Implement OpenAI API call here
    res.json({ reply: 'This is a placeholder response from the AI.' });
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).json({ error: 'Failed to get response from AI.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
