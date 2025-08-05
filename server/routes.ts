import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // No backend routes needed - using Web3Forms for contact form
  
  const httpServer = createServer(app);
  return httpServer;
}