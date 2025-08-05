import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import * as nodemailer from "nodemailer";
import sgMail from "@sendgrid/mail";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email notification using SendGrid or Gmail
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER || 'sedcmau@gmail.com',
            pass: process.env.EMAIL_PASS
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER || 'sedcmau@gmail.com',
          to: 'sedcmau@gmail.com',
          subject: `New Contact Form - ${validatedData.firstName} ${validatedData.lastName}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Service Interest:</strong> ${validatedData.serviceInterest}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message}</p>
            <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
          `
        };

        if (process.env.EMAIL_PASS) {
          await transporter.sendMail(mailOptions);
          console.log('Email notification sent successfully');
        } else {
          console.log('Email not sent - EMAIL_PASS not configured');
        }
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
      }
      
      res.json(contact);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
