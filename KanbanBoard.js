// src/components/KanbanBoard.js
import React, { useState, useEffect } from "react";
import { fetchTickets } from "../apiResponse";
import KanbanColumn from "./KanbanColumn";


const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    const loadTickets = async () => {
      const data = await fetchTickets();

      // Extract tickets array from the data
      const ticketsArray = data.tickets || [];
      setTickets(ticketsArray);
      groupTickets(ticketsArray, groupBy);
    };

    loadTickets();
  }, []);

  useEffect(() => {
    groupTickets(tickets, groupBy);
  }, [groupBy, tickets]);

  const groupTickets = (tickets, criterion) => {
    if (!Array.isArray(tickets)) {
      console.error("Tickets is not an array:", tickets);
      return;
    }

    const grouped = tickets.reduce((acc, ticket) => {
      const key = ticket[criterion] || "Unassigned";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(ticket);
      return acc;
    }, {});
    setGroupedTickets(grouped);
  };

  return (
    <div>
      <h1>Kanban Board</h1>
      <div style={{ marginBottom: "20px" }}>
        <label>Group By: </label>
        <select onChange={(e) => setGroupBy(e.target.value)} value={groupBy}>
          <option value="status">Status</option>
          <option value="userId">User</option>
          <option value="priority">Priority</option>
        </select>
        <button onClick={() => groupTickets(tickets, groupBy)}>Display</button>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {Object.keys(groupedTickets).map((key) => (
          <KanbanColumn key={key} title={key} tickets={groupedTickets[key]} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
