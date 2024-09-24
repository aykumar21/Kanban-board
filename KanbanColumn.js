// src/components/KanbanColumn.js
import React from "react";
import KanbanCard from "./KanbanCard";


const KanbanColumn = ({ title, tickets }) => {

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "300px",
        padding: "10px",
      }}
    >
      <h2>{title}</h2>
      {tickets.length > 0 ? (
        tickets.map((ticket) => <KanbanCard key={ticket.id} ticket={ticket} />)
      ) : (
        <p>No tickets available</p>
      )}
    </div>
  );
};

export default KanbanColumn;
