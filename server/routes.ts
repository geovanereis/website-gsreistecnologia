import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote request endpoints
  app.post('/api/quote-requests', async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      
      // Create quote request
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      
      res.status(201).json({
        success: true,
        data: quoteRequest,
        message: 'Solicitação de orçamento enviada com sucesso!'
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: 'Dados inválidos',
          errors: error.errors
        });
      } else {
        console.error('Error creating quote request:', error);
        res.status(500).json({
          success: false,
          message: 'Erro interno do servidor'
        });
      }
    }
  });

  // Admin endpoints - protected (would require authentication in production)
  // Disabled for security in MVP
  /*
  app.get('/api/admin/quote-requests', async (req, res) => {
    // TODO: Add authentication middleware
    try {
      const requests = await storage.getQuoteRequests();
      res.json({
        success: true,
        data: requests
      });
    } catch (error) {
      console.error('Error fetching quote requests:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
      });
    }
  });
  */

  const httpServer = createServer(app);

  return httpServer;
}
