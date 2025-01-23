import express from "express";
import { TicketController } from "../controllers/ticketsControllers";

const router = express.Router();

router.get("/tickets", TicketController.getTickets);
router.post("/tickets", TicketController.createTicket);
router.put("/tickets/:id", TicketController.updateTicket);
router.delete("/tickets/:id", TicketController.deleteTicket);

export default router;
