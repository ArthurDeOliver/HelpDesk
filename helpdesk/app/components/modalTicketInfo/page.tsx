import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface ModalTicketInfoProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ticket: {
    id: number;
    title: string;
    priority: string;
    status: string;
    description: string;
  };
  onDelete: (id: number) => void;
  onUpdate: (updatedTicket: {
    id: number;
    title: string;
    priority: string;
    status: string;
    description: string;
  }) => void;
}

export const ModalTicketInfo: React.FC<ModalTicketInfoProps> = ({
  setIsModalOpen,
  ticket,
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedTicket, setEditedTicket] = React.useState(ticket);

  const handleSave = () => {
    onUpdate(editedTicket);
    setIsEditing(false);
    setIsModalOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setEditedTicket((prev) => ({ ...prev, [id]: value }));
  };

  const handleDelete = () => {
    onDelete(ticket.id);
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white relative px-6 pb-6 rounded-lg shadow-lg w-1/2">
        <div className="py-4">
          <h1 className="text-xl">Chamado info</h1>
        </div>
        <form>
          <div className="w-full flex gap-4">
            <div className="mb-4">
              <label htmlFor="title" className="block font-semibold mb-2">
                Título
              </label>
              <input
                id="title"
                value={editedTicket.title}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="priority" className="block font-semibold mb-2">
                Prioridade
              </label>
              <input
                id="priority"
                value={editedTicket.priority}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block font-semibold mb-2">
                Status
              </label>
              <input
                id="status"
                value={editedTicket.status}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border px-3 py-2"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <div className="mb-4">
              <label htmlFor="description" className="block font-semibold mb-2">
                Descrição
              </label>
              <textarea
                id="description"
                value={editedTicket.description}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border resize-none px-3 py-2"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <div className="flex">
              <button
                type="button"
                className="absolute -top-4 -right-4 underline bg-white rounded-full"
                onClick={() => setIsModalOpen(false)}
              >
                <IoIosCloseCircle
                  size={32}
                  className="text-red-500 hover:text-red-900 transition-all"
                />
              </button>
              <button
                type="button"
                className="mr-10 px-4 py-2 underline text-red-600"
                onClick={handleDelete}
              >
                Excluir
              </button>
            </div>
            {isEditing ? (
              <button
                type="button"
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={handleSave}
              >
                Salvar
              </button>
            ) : (
              <button
                type="button"
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-900 transition-all text-white rounded"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
