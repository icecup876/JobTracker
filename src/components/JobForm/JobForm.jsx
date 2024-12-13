// src/components/JobForm/JobForm.jsx

import React, { useState } from "react";

const JobForm = ({ addJob }) => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("Applied");
  const [deadline, setDeadline] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob({ companyName, position, status, deadline, notes });
    setCompanyName("");
    setPosition("");
    setStatus("Applied");
    setDeadline("");
    setNotes("");
  };

  return (
    <div className="job-form">
      <h2>Add a New Job Listing</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <textarea
          placeholder="Notes (e.g., Interview Feedback)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default JobForm;
