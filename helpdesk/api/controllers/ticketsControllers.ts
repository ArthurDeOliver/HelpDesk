import prisma from "../model/prismaClient";
import { Request, Response } from "express";

export const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await prisma.ticket.findMany();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tickets" });
  }
};

export const createTicket = async (req: Request, res: Response) => {
  try {
    const { title, description, status } = req.body;
    const newTicket = await prisma.ticket.create({
      data: { title, description, status },
    });
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ message: "Error creating ticket" });
  }
};

export const updateTicket = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const updatedTicket = await prisma.ticket.update({
      where: { id: Number(id) },
      data: { title, description, status },
    });
    res.json(updatedTicket);
  } catch (error) {
    res.status(500).json({ message: "Error updating ticket" });
  }
};

export const deleteTicket = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.ticket.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting ticket" });
  }
};
