// server.js
import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode.
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa' // specify app type to be SPA
  });

  // Use Vite's connect instance as middleware.
  // This will handle serving client-side assets and HMR.
  app.use(vite.middlewares);

  // Serve the index.html for all other requests.
  app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  });

  const port = process.env.PORT || 9002;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

createServer();
