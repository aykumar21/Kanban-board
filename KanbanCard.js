// src/components/KanbanCard.js
import React from "react";

const KanbanCard = ({ ticket }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "8px",
        marginBottom: "8px",
      }}
    >
      <h3>{ticket.title}</h3>
      <p>
        <strong>Status:</strong> {ticket.status}
      </p>
      <p>
        <strong>User:</strong> {ticket.user}
      </p>
      <p>
        <strong>Priority:</strong> {ticket.priority}
      </p>
    </div>
  );
};

export default KanbanCard;
