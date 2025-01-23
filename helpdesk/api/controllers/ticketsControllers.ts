import { Request, Response } from "express";
import { TicketModel } from "../model/ticketsModel";

export class TicketController {
  static async getTickets(req: Request, res: Response) {
    try {
      const tickets = await TicketModel.getAllTickets();
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ message: "Error fetching tickets" });
    }
  }

  static async createTicket(req: Request, res: Response) {
    try {
      const { title, description, status } = req.body;
      const newTicket = await TicketModel.createTicket({
        title,
        description,
        status,
      });
      res.status(201).json(newTicket);
    } catch (error) {
      res.status(500).json({ message: "Error creating ticket" });
    }
  }

  static async updateTicket(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description, status } = req.body;
      const updatedTicket = await TicketModel.updateTicket(Number(id), {
        title,
        description,
        status,
      });
      res.json(updatedTicket);
    } catch (error) {
      res.status(500).json({ message: "Error updating ticket" });
    }
  }

  static async deleteTicket(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await TicketModel.deleteTicket(Number(id));
      res.json({ message: "Ticket deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting ticket" });
    }
  }
}
