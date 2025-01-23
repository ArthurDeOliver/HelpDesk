import prisma from "./prismaClient";

export class TicketModel {
  static async getAllTickets() {
    return prisma.ticket.findMany();
  }

  static async createTicket(data: {
    title: string;
    description: string;
    status: string;
  }) {
    return prisma.ticket.create({ data });
  }

  static async updateTicket(
    id: number,
    data: { title: string; description: string; status: string }
  ) {
    return prisma.ticket.update({
      where: { id },
      data,
    });
  }

  static async deleteTicket(id: number) {
    return prisma.ticket.delete({
      where: { id },
    });
  }
}
