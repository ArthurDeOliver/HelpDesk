import React, { useState } from "react";
import { Modal } from "../modal/page";
import { TicketInfoRow } from "../TicketInfoRow/page";
import { Button } from "../button/page";

export const TicketLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tickets, setTickets] = useState<
    Array<{
      id: number;
      title: string;
      description: string;
      status: string;
      priority: string;
    }>
  >([]);

  const fetchTickets = async () => {
    try {
      const response = await fetch("http://localhost:3001/tickets");
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.error("Erro ao buscar chamados:", error);
    }
  };

  const updateTicket = async (updatedTicket: {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
  }) => {
    try {
      await fetch(`http://localhost:3001/tickets/${updatedTicket.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTicket),
      });
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.id === updatedTicket.id ? updatedTicket : ticket
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar o chamado:", error);
    }
  };

  const deleteTicket = async (id: number) => {
    try {
      await fetch(`http://localhost:3001/tickets/${id}`, { method: "DELETE" });
      setTickets((prev) => prev.filter((ticket) => ticket.id !== id));
    } catch (error) {
      console.error("Erro ao excluir o chamado:", error);
    }
  };

  React.useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="px-10 py-6 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-montserrat text-2xl font-semibold text-gray-800">
            Chamados
          </h1>
          <p className="text-gray-600">
            clique para exibir mais informações, editar ou excluir
          </p>
        </div>

        <div className="w-40 h-12">
          <Button
            text="Novo chamado"
            onClick={() => setIsModalOpen(true)}
          ></Button>
        </div>
      </div>
      <table className="table-auto border-collapse w-full mt-4 border border-gray-300 shadow-xl">
        <thead>
          <tr className="bg-gray-100 text-gray-800">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Título</th>
            <th className="border border-gray-300 px-4 py-2">Descrição</th>
            <th className="border border-gray-300 px-4 w-40 py-2">
              Prioridade
            </th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets
            .map((ticket) => (
              <TicketInfoRow
                key={ticket.id}
                {...ticket}
                onDelete={deleteTicket}
                onUpdate={updateTicket}
              />
            ))
            .reverse()}
        </tbody>
      </table>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          onTicketCreated={(newTicket) =>
            setTickets((prev) => [...prev, newTicket])
          }
        />
      )}
    </div>
  );
};
