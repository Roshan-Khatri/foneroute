
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// The main handler for the AI assistant API
export const aiAssistantApi = async (req, res) => {
    if (req.method !== 'POST') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ reply: 'Method Not Allowed' }));
    }

    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            const { message } = JSON.parse(body);

            console.log("User:", message);

            if (!message) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ reply: "Message missing from request" }));
            }
            
            if (!process.env.GEMINI_API_KEY) {
                console.error('GEMINI_API_KEY is not set.');
                res.writeHead(500, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ reply: 'Server configuration error.' }));
            }

            const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

            const systemPrompt = `
You are the AI assistant for the FoneRoute website. Your name is FoneRoute AI.
You must act as a professional support and sales assistant.

**Rules:**
1.  Keep your answers a bit concise and directly related to the user's question.
`;

            const result = await model.generateContent([
                systemPrompt,
                message 
            ]);

            const response = await result.response;
            const reply = response.text() || "Sorry, I couldn't find an answer to that.";

            console.log("AI Reply:", reply);
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ reply }));

        } catch (err) {
            console.error("AI ERROR:", err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ reply: "The AI assistant failed to respond. Please try again." }));
        }
    });
};
