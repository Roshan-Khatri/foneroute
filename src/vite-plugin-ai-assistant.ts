import { Plugin } from 'vite';

export function aiAssistantPlugin(): Plugin {
  return {
    name: 'vite-plugin-ai-assistant',
    configureServer(server) {
      server.middlewares.use('/api/chat', (req, res, next) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
          try {
            const { messages } = JSON.parse(body);

            if (!messages || !Array.isArray(messages)) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid message format' }));
              return;
            }

            const lastMessage = messages[messages.length - 1];
            const aiResponse = `This is a streamed response to: "${lastMessage.text}"`;

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');

            let i = 0;
            const streamInterval = setInterval(() => {
              if (i < aiResponse.length) {
                const chunk = aiResponse[i];
                res.write(`data: ${JSON.stringify({ text: chunk })}\n\n`);
                i++;
              } else {
                clearInterval(streamInterval);
                res.end();
              }
            }, 50);

            req.on('close', () => {
              clearInterval(streamInterval);
              res.end();
            });
          } catch (error) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Invalid JSON in request body' }));
          }
        });
      });
    },
  };
}
