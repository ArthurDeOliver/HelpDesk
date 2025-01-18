import React from "react";
import { FaClipboardList } from "react-icons/fa";

interface ModalProps {
  setIsModalOpen: (value: boolean) => void;

  onTicketCreated: (ticket: {
    id: number;
    title: string;
    description: string;
    priority: string;
    status: string;
  }) => void;
}

export const Modal: React.FC<ModalProps> = ({
  setIsModalOpen,
  onTicketCreated,
}) => {
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    status: "open",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const newTicket = await response.json();
        onTicketCreated(newTicket); // Atualiza a tabela no frontend
        setIsModalOpen(false); // Fecha o modal
      } else {
        console.error("Erro ao criar chamado.");
      }
    } catch (error) {
      console.error("Erro ao criar chamado", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex text-center gap-2">
          <FaClipboardList size={24} className="text-gray-800" />
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Criar Chamado
          </h2>
        </div>
        <form onSubmit={handleFormSubmit}>
          {/* Formulário */}
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium text-gray-700">
              Título
            </label>
            <input
              value={formData.title}
              onChange={handleInputChange}
              type="text"
              id="title"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-medium text-gray-700"
            >
              Descrição
            </label>
            <textarea
              onChange={handleInputChange}
              value={formData.description}
              id="description"
              rows={4}
              className="resize-none mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="px-4 py-2 underline text-gray-700 hover:text-red-600"
              onClick={() => setIsModalOpen(false)} // Fecha o modal
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition"
            >
              Criar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
