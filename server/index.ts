import express from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite";

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple request logging for API routes
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    console.log(`${req.method} ${req.path}`);
  }
  next();
});

async function startServer() {
  // Register your API routes
  const server = await registerRoutes(app);

  // Setup Vite for development or serve static files for production
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Use port 3001 for local development to avoid macOS port 5000 conflict
  const port = process.env.PORT || 3001;
  
  server.listen(port,  () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
    console.log(`📱 Healthcare website ready!`);
  });
}

// Start the server
startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
