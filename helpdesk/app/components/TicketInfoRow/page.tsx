import React, { useState } from "react";
import { ModalTicketInfo } from "../modalTicketInfo/page";

interface TicketProps {
  id: number;
  title: string;
  priority: string;
  status: string;
  description: string;
  onDelete: (id: number) => void;
  onUpdate: (updatedTicket: {
    id: number;
    title: string;
    priority: string;
    status: string;
    description: string;
  }) => void;
}

export const TicketInfoRow: React.FC<TicketProps> = ({
  id,
  title,
  priority,
  status,
  description,
  onDelete,
  onUpdate,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <tr
        onClick={handleRowClick}
        className="hover:bg-cyan-700 hover:text-white transition-all cursor-pointer"
      >
        <td className="border border-gray-300 text-center w-20 px-4 py-2">
          {id}
        </td>
        <td className="border border-gray-300 px-4 py-2">{title}</td>
        <td className="border border-gray-300 max-w-20 overflow-hidden px-4 py-2">
          {description.length > 55
            ? `${description.substring(0, 55)}...`
            : description}
        </td>
        <td className="border border-gray-300 w-30 px-4 py-2">{priority}</td>
        <td className="border border-gray-300 text-center w-40 px-4 py-2">
          {status === "open" ? (
            <span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
          ) : (
            <span className="inline-block w-2 h-2 mr-2 bg-red-500 rounded-full"></span>
          )}
          {status}
        </td>
      </tr>
      {isModalOpen && (
        <ModalTicketInfo
          setIsModalOpen={setIsModalOpen}
          ticket={{ id, title, priority, status, description }}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      )}
    </>
  );
};
