import express from 'express';
import { config } from 'dotenv';
import { configErrorHandler } from './middlewares/m_globalerrorhandler.js';
import { configBaseMiddlewares } from './middlewares/m_basemiddlewares.js';
import { router } from './router.js';
config();

const app = express();
const PORT = process.env.PORT || 3000;

configBaseMiddlewares(app);

app.use(router); // All APIs

const server = app.listen(PORT, () => {
  console.log(`Server is forged and running on http://localhost:${PORT}`);
});

const shutdown = () => {
  console.log("Shuting down the server!");
  server.close(exit);
}

const exit = () => {
  console.log("✅ Server closed!");
  process.exit(0);
}

configErrorHandler(app);
process.on("SIGINT", shutdown); // Ctrl + C
process.on("SIGTERN", shutdown); // Host terminate